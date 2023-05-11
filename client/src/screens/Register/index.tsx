import React, {useEffect, useState} from 'react';
import {Container, Box, Input, Title, Botton, BottonTitle} from './styles';
import {api} from '../../libs/api';
import {Text} from 'react-native';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const getUsers = async () => {
    try {
      const response = await api.post('/register', {
        email: email,
        password: password,
      });
      setData(response.data);
    } catch (error) {
      setError(
        'Erro durante o cadastro do usuário. Por favor, tente novamente.',
      );
      console.error('Erro durante a chamada à API:', error);
    }
  };

  return (
    <Container>
      <Box>
        <Title>Cadastre-se</Title>
        <Input placeholder="Nome" onChangeText={setName}></Input>
        <Input placeholder="Email" onChangeText={setEmail}></Input>
        <Input
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}></Input>
        <Input
          placeholder="Confirme Senha"
          secureTextEntry
          onChangeText={setConfirmPassword}></Input>
        {error !== '' && <Text style={{color: 'red'}}>{error}</Text>}
        <Botton onPress={getUsers}>
          <BottonTitle>Cadastrar</BottonTitle>
        </Botton>
      </Box>
    </Container>
  );
}
