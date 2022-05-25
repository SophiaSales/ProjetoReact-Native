import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {styles} from './styles';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}> Seja Bem Vindo de Volta</Text>
        <Input placeholder="Usuario" />
        <Input placeholder="Senha" />
        <Button />
      </View>
    </View>
  );
};

export default SignIn;
