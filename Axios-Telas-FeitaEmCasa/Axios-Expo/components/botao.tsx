import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Botao({ label, onPress }) {
    const style = StyleSheet.create({
        botao: {
            backgroundColor: "#f39200",
            borderRadius: 4,
            padding: 10,
            minWidth: "80%",
            alignItems: "center",
            marginLeft: 25,
            marginTop: 20,
            textAlign: "center",
        },
        texto: {
            color: "white",
            fontWeight: "bold",
        },
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.botao}>
                <Text style={style.texto}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}