import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function info() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [registered, setRegistered] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('userToken');
            axios.get('https://devthigas.com/json/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => {
                setUser(resp.data.user);
                setEmail(resp.data.email);
                setRegistered(resp.data.registered);
            }).catch(err => console.log(err));
        };

        fetchData();
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <Text>{user}</Text>
            <Text>{email}</Text>
            <Text>{registered}</Text>
        </View>
    );
}
