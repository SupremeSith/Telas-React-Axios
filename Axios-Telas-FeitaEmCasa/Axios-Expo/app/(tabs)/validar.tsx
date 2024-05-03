import { StyleSheet, View, Text } from 'react-native';
import InputText from '@/components/inputtext';
import Botao from '@/components/botao';
import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
const handleSubmit = async () => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    axios.post("https://devthigas.com/json/jwt-auth/v1/token/validate", {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function (response) {
      if (response.status === 200) {
        alert('Token válido!');
      } else {
        alert('Token inválido!');
      }
    })
    .catch(function (error) {
      console.error('Erro ao validar token:', error);
    });
  } else {
    alert('Token não encontrado!');

  
  }
};

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
      <Text style={styles.title}>Validar Token </Text>
      <Botao label="Validar" onPress={handleSubmit}/>
    </View>
  );
}