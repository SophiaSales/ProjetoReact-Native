import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './styles';
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
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}> Seja Bem Vindo ao SGPA</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={text => setUsuario(text)}></TextInput>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          onChangeText={text => setSenha(text)}></TextInput>
        <TouchableOpacity style={styles.botton} onPress={logged}>
          <Text style={styles.bottonTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
