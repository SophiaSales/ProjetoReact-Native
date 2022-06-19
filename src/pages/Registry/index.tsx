import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {propsStack} from '../../routes/tab.routes';
import {theme} from '../../theme';

import {styles} from './styles';

export function Registry() {
  const [numRequest, setNumRequest] = useState('');
  const [nameClient, setNameClient] = useState('');
  const [numTable, setNumTable] = useState('');
  const [requests, setRequests] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation<propsStack>();

  const request = () => {
    if (numRequest && nameClient && numTable && requests) {
      navigation.navigate('Requests');
    }
    // navigation.navigate('Requests');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Pedidos</Text>
      <TextInput
        style={styles.input}
        placeholder="Numero do Pedido"
        onChangeText={text => setNumRequest(text)}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        onChangeText={text => setNameClient(text)}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Numero da Mesa"
        onChangeText={text => setNumTable(text)}></TextInput>
      <View style={styles.inputRegistry}>
        <TextInput
          style={{fontSize: 17}}
          multiline={true}
          placeholder="Registre seu Pedido"
          onChangeText={text => setRequests(text)}
          returnKeyType="done"></TextInput>
      </View>
      <View>
        <BouncyCheckbox
          style={styles.checkbox}
          size={20}
          fillColor={theme.colors.purpleDark}
          unfillColor="#FFFFFF"
          text="Para viajem"
          iconStyle={{borderColor: 'gray', borderRadius: 2}}
          textStyle={{textDecorationLine: 'none'}}
          onPress={() => setIsChecked(!isChecked)}
        />
        <BouncyCheckbox
          style={styles.checkbox}
          size={20}
          fillColor={theme.colors.purpleDark}
          unfillColor="#FFFFFF"
          text="Comer no local"
          iconStyle={{borderColor: 'gray', borderRadius: 2}}
          textStyle={{textDecorationLine: 'none'}}
          onPress={() => setIsChecked(!isChecked)}
        />
      </View>
      <TouchableOpacity style={styles.botton}>
        <Text style={styles.bottonTitle} onPress={request}>
          Adicionar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
