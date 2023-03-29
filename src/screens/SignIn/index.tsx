import React, {useState} from 'react';
import {Botton, BottonTitle, Box, Container, Input, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

import {propsStack} from '../../routes/stack.routes';
import {Text, TouchableOpacity} from 'react-native';

export function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<propsStack>();

  const segre = '1234';
  const usuario = 'adm';
  const logged = () => {
    if (usuario === user && segre === password) {
      navigation.reset({
        index: 0,
        routes: [{name: 'TabRoutes'}],
      });
    }
  };
  return (
    <Container>
      <Box>
        <Title>Seja Bem Vindo</Title>
        <Input placeholder="Usuario" onChangeText={setUser}></Input>
        <Input
          secureTextEntry
          placeholder="Senha"
          onChangeText={setPassword}></Input>
        <TouchableOpacity>
          <Text style={{color: 'red'}}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Botton onPress={logged}>
          <BottonTitle>Login</BottonTitle>
        </Botton>
        <Botton onPress={() => navigation.navigate('Register')}>
          <BottonTitle>Cadastre-se</BottonTitle>
        </Botton>
      </Box>
    </Container>
  );
}
