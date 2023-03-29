import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {api} from '../../libs/api';
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
  const [numOrder, setNumOrder] = useState<number>();
  const [nameClient, setNameClient] = useState('');
  const [numTable, setNumTable] = useState<number>();
  const [order, setOrder] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSendingOrder, setIsSendingOrder] = useState(false);

  async function handleSendOrder() {
    if (isSendingOrder) {
      return;
    }
    setIsSendingOrder(true);
    try {
      await api.post('/orderManagement', {
        num_order: numOrder,
        name_client: nameClient,
        num_table: numTable,
        order: order,
        type: isChecked,
      });
    } catch (error) {
      console.log(error);
      setIsSendingOrder(false);
    }
  }
  return (
    <Container>
      <Title>Registro de Pedidos</Title>
      <Input
        placeholder="Numero do Pedido"
        onChangeText={setNumOrder}
        keyboardType="numeric"
        value={numOrder}></Input>
      <Input
        placeholder="Nome do Cliente"
        onChangeText={setNameClient}
        value={nameClient}></Input>
      <Input
        placeholder="Numero da Mesa"
        onChangeText={setNumTable}
        keyboardType="numeric"
        value={numTable}></Input>
      <InputRegistry
        multiline={true}
        blurOnSubmit={true}
        placeholder="Registre seu Pedido"
        onChangeText={setOrder}></InputRegistry>
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
        <BottonTitle onPress={handleSendOrder}>Adicionar</BottonTitle>
      </Botton>
    </Container>
  );
}
