import React, {useState} from 'react';
import {
  Container,
  Box,
  Input,
  Title,
  Botton,
  BottonTitle,
  TextError,
  TextSuccess,
} from './styles';
import UsersAPI from '../../API/Users';

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
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    setSuccessMessage('');
    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorConfirmPassword('');
    setErrorMatch('');
    setError('');
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
        setSuccessMessage('Cadastro realizado com sucesso!');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
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
        <Input placeholder="Nome" onChangeText={setName} value={name}></Input>
        {errorName !== '' && <TextError>{errorName}</TextError>}
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          value={email}></Input>
        {errorEmail !== '' && <TextError>{errorEmail}</TextError>}
        <Input
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}
          value={password}></Input>
        {errorPassword !== '' && <TextError>{errorPassword}</TextError>}
        <Input
          placeholder="Confirme Senha"
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}></Input>
        {errorConfirmPassword !== '' && (
          <TextError>{errorConfirmPassword}</TextError>
        )}
        {errorMatch !== '' && <TextError>{errorMatch}</TextError>}
        {error !== '' && <TextError>{error}</TextError>}
        <Botton onPress={handleRegister}>
          <BottonTitle>Cadastrar</BottonTitle>
        </Botton>
        {successMessage !== '' && <TextSuccess>{successMessage}</TextSuccess>}
      </Box>
    </Container>
  );
}
