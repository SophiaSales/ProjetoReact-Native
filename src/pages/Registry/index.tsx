import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {theme} from '../../theme';

import {styles} from './styles';

export function Registry() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Pedidos</Text>
      <TextInput
        style={styles.input}
        placeholder="Numero do Pedido"></TextInput>
      <TextInput style={styles.input} placeholder="Cliente"></TextInput>
      <TextInput style={styles.input} placeholder="Numero da Mesa"></TextInput>
      <TextInput
        multiline
        style={styles.inputRegistry}
        placeholder="Registre seu Pedido"
        returnKeyType="done"></TextInput>
      <BouncyCheckbox
        style={styles.checkbox}
        size={20}
        fillColor={theme.colors.purpleDark}
        unfillColor="#FFFFFF"
        text="Para viajem"
        iconStyle={{borderColor: 'gray', borderRadius: 2}}
        textStyle={{textDecorationLine: 'none'}}
        onPress={(isChecked: boolean) => {}}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={20}
        fillColor={theme.colors.purpleDark}
        unfillColor="#FFFFFF"
        text="Comer no local"
        iconStyle={{borderColor: 'gray', borderRadius: 2}}
        textStyle={{textDecorationLine: 'none'}}
        onPress={(isChecked: boolean) => {}}
      />
      <TouchableOpacity style={styles.botton}>
        <Text style={styles.bottonTitle}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
