import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import InputText from '@/components/inputtext';
import Botao from '@/components/botao';
import axios from 'axios';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  }

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  }

  const handleEmailChange = (text: string) => {
    setEmail(text);
  }

  const handleSubmit = async () => {
    axios.post('https://devthigas.com/json/api/user', { username, email, password })
      .then(function (response) {
        if (response.data.id) {
          alert('Usuário cadastrado com sucesso');
        }
      })
      .catch(function (error: any) {
        if (error.code == "error" && error.data.status == 406) {
          alert('Dados Incompletos');
        } else if (error.code == "error" && error.data.status == 403) {
          alert('Erro ao cadastrar usuário');
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
      <Text style={styles.title}>Cadastro </Text>
      <InputText label="Usuario" value={username} onChange={handleUsernameChange}/>
      <InputText label="E-Mail" value={email} onChange={handleEmailChange}/>
      <InputText label="Senha" value={password} onChange={handlePasswordChange}/>   
      <Botao label="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

