import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputText from '@/components/inputtext';
import Botao from '@/components/botao';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    axios.post("https://devthigas.com/json/jwt-auth/v1/token", { username, password })
      .then(function (response) {
        if (response.data.token) {
          AsyncStorage.setItem('userToken', response.data.token);
          alert('Usuário autenticado com sucesso');
        } else {
          if (response.data.status === 403) {
            if (response.data.code === '[jwt_auth] invalid_username') {
              alert('Usuário inválido!');
            } else if (response.data.code === '[jwt_auth] incorrect_password') {
              alert('Senha inválida!');
            } else {
              alert('Erro desconhecido na autenticação:');
            }
          } else {
            alert('Erro inesperado');
          }
        }
      });
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 500,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputText label="Usuario" value={username} onChange={handleUsernameChange} />
      <InputText label="Senha" value={password} onChange={handlePasswordChange} />
      <Botao label="Enviar" onPress={handleSubmit} />
    </View>
  );
}