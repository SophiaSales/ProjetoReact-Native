import React, {useState} from 'react';
import {Container, Box, Input, Title, Botton, BottonTitle} from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        <Botton>
          <BottonTitle>Cadastrar</BottonTitle>
        </Botton>
      </Box>
    </Container>
  );
}
