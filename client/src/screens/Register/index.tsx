import React, {useEffect, useState} from 'react';
import {Container, Box, Input, Title, Botton, BottonTitle} from './styles';
import UsersAPI from '../../API/Users';
import {Text} from 'react-native';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [errorMatch, setErrorMatch] = useState('');

  const handleRegister = async () => {
    let isValid = true;

    if (name === '') {
      setErrorName('Por favor, preencha o campo de nome.');
      isValid = false;
    }
    if (email === '') {
      setErrorEmail('Por favor, preencha o campo de email.');
      isValid = false;
    }
    if (password === '') {
      setErrorPassword('Por favor, preencha o campo de senha.');
      isValid = false;
    }
    if (confirmPassword === '') {
      setErrorConfirmPassword('Por favor, confirme sua senha.');
      isValid = false;
    } else if (password !== confirmPassword) {
      setError('A senha e a confirmação de senha não correspondem.');
      return;
    }

    if (isValid) {
      try {
        const response = await UsersAPI.postUsers(email, password);
        setData(response.data);
      } catch (error) {
        setError(
          'Erro durante o cadastro do usuário. Por favor, tente novamente.',
        );
        console.error('Erro durante a chamada à API:', error);
      }
    }
  };

  return (
    <Container>
      <Box>
        <Title>Cadastre-se</Title>
        <Input placeholder="Nome" onChangeText={setName}></Input>
        {errorName !== '' && <Text style={{color: 'red'}}>{errorName}</Text>}
        <Input placeholder="Email" onChangeText={setEmail}></Input>
        {errorEmail !== '' && <Text style={{color: 'red'}}>{errorEmail}</Text>}
        <Input
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}></Input>
        {errorPassword !== '' && (
          <Text style={{color: 'red'}}>{errorPassword}</Text>
        )}
        <Input
          placeholder="Confirme Senha"
          secureTextEntry
          onChangeText={setConfirmPassword}></Input>
        {errorConfirmPassword !== '' && (
          <Text style={{color: 'red'}}>{errorConfirmPassword}</Text>
        )}
        {errorMatch !== '' && <Text style={{color: 'red'}}>{errorMatch}</Text>}
        {error !== '' && <Text style={{color: 'red'}}>{error}</Text>}
        <Botton onPress={handleRegister}>
          <BottonTitle>Cadastrar</BottonTitle>
        </Botton>
      </Box>
    </Container>
  );
}
