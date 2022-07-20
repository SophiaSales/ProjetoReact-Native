import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {propsStack} from '../../routes/tab.routes';
import themes from '../../theme/themes';

import {
  Botton,
  BottonTitle,
  Container,
  Input,
  InputRegistry,
  Title,
} from './styles';

export function Registry() {
  const [numRequest, setNumRequest] = useState('');
  const [nameClient, setNameClient] = useState('');
  const [numTable, setNumTable] = useState('');
  const [requests, setRequests] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation<propsStack>();

  const request = () => {
    if (numRequest && nameClient && numTable && requests && isChecked) {
      navigation.navigate('Requests');
    }
  };

  return (
    <Container>
      <Title>Registro de Pedidos</Title>
      <Input
        placeholder="Numero do Pedido"
        onChangeText={setNumRequest}></Input>
      <Input placeholder="Nome do Cliente" onChangeText={setNameClient}></Input>
      <Input placeholder="Numero da Mesa" onChangeText={setNumTable}></Input>
      <InputRegistry
        multiline={true}
        blurOnSubmit={true}
        placeholder="Registre seu Pedido"
        onChangeText={setRequests}></InputRegistry>
      <View>
        <BouncyCheckbox
          style={{padding: 10}}
          size={20}
          fillColor={themes.COLORS.PRIMARY2}
          unfillColor={themes.COLORS.INPUT2}
          text="Para viajem"
          iconStyle={{borderColor: 'gray', borderRadius: 2}}
          textStyle={{textDecorationLine: 'none'}}
          onPress={() => setIsChecked(!isChecked)}
        />
        <BouncyCheckbox
          style={{padding: 10}}
          size={20}
          fillColor={themes.COLORS.PRIMARY2}
          unfillColor={themes.COLORS.INPUT2}
          text="Comer no local"
          iconStyle={{borderColor: 'gray', borderRadius: 2}}
          textStyle={{textDecorationLine: 'none'}}
          onPress={() => setIsChecked(!isChecked)}
        />
      </View>
      <Botton>
        <BottonTitle onPress={request}>Adicionar</BottonTitle>
      </Botton>
    </Container>
  );
}
