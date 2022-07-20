import React, {useState} from 'react';
import {Botton, BottonTitle, Box, Container, Input, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

import {propsStack} from '../../routes/stack.routes';

export function SignIn() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<propsStack>();

  const segre = '1234';
  const user = 'adm';
  const logged = () => {
    if (user === usuario && segre === senha) {
      navigation.reset({
        index: 0,
        routes: [{name: 'TabRoutes'}],
      });
    }
  };
  return (
    <Container>
      <Box>
        <Title>Seja Bem Vindo ao SGPA</Title>
        <Input placeholder="Usuario" onChangeText={setUsuario}></Input>
        <Input
          secureTextEntry
          placeholder="Senha"
          onChangeText={setSenha}></Input>
        <Botton onPress={logged}>
          <BottonTitle>Login</BottonTitle>
        </Botton>
      </Box>
    </Container>
  );
}
