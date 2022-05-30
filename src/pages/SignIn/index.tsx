import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

import {propsStack} from '../../routes';
import {Requests} from '../Requests';

export function SignIn() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<propsStack>();

  const segre = '1234';
  const user = 'adm';
  const nextPage = () => {
    if (user === usuario && segre === senha) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Requests'}],
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}> Seja Bem Vindo de Volta</Text>
        <Input placeholder="Usuario" onChangeText={text => setUsuario(text)} />
        <Input
          secureTextEntry
          placeholder="Senha"
          onChangeText={text => setSenha(text)}
        />
        <Button onPress={nextPage} />
      </View>
    </View>
  );
}
