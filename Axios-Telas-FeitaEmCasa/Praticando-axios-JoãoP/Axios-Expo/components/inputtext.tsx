import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const InputText = ({ label, value, onChange }) => {
    const [hover, setHover] = useState('#5D5C5C');

    const styles = StyleSheet.create({
                inventoryInput: {
            marginLeft: 25,
            marginBottom: 10,
            marginTop: 30,
            paddingTop: 14,
        },
        label: {
            position: 'absolute',
            top: 5, 
            left: 10,
            backgroundColor: "#F2F2F2",
            paddingHorizontal: 2,
            color: '#5D5C5C',
            fontWeight: 'bold',
        },
        input: {
            padding: 5,
            borderWidth: 1,
            borderColor: hover,
            borderRadius: 4,
            fontSize: 16,
            lineHeight: 24,
            minWidth: "90%",
            maxWidth: "90%", 
        },
    });

    return (
        <View style={styles.inventoryInput}>
            <TextInput 
                style={styles.input}
                onFocus={() => setHover("#f39200")}
                onBlur={() => setHover("#5D5C5C")}
                value={value}
                onChangeText={onChange}
            />
            <Text style={[styles.label]}>{label}</Text>
        </View>
    );
};

export default InputText;