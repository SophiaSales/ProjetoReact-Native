import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

import {propsStack} from '../../routes';

export function SignIn() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<propsStack>();

  // const segre = '1234';
  // const user = 'adm';
  // const nextPage = () => {
  //   if (user === usuario && segre === senha) {
  //     navigation.navigate('Requests', {
  //       usuario: usuario,
  //       senha: senha,
  //     });
  //   }
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
        <Button
          onPress={() =>
            navigation.navigate('Requests', {
              usuario: usuario,
              senha: senha,
            })
          }
        />
      </View>
    </View>
  );
}
