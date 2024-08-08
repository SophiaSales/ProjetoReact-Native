import React, {useState} from 'react';
import RegistryOrders from '../../API/RegistryOrders';
import {
  Botton,
  BottonTitle,
  Container,
  Input,
  InputRegistry,
  Title,
  SuccessMessage,
  ErrorMessage,
} from './styles';
export function Registry() {
  const [orderNumber, setOrderNumber] = useState<number>();
  const [orderOwner, setOrderOwner] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSendOrder() {
    setSuccessMessage('');
    setError('');
    try {
      const response = await RegistryOrders.postRegistryOrders(
        orderNumber,
        orderOwner,
        orderItems,
      );
      setData(response.data);
      setSuccessMessage('Pedido Registrado com Sucesso!');
      setOrderNumber(undefined);
      setOrderOwner('');
      setOrderItems([]);
    } catch (error) {
      console.log(error);
      setError('Erro durante o cadastro do Pedido.');
      console.error('Erro durante a chamada à API:', error);
    }
  }
  return (
    <Container>
      <Title>Registro de Pedidos</Title>
      <Input
        placeholder="Numero do Pedido"
        onChangeText={setOrderNumber}
        keyboardType="numeric"
        value={orderNumber}></Input>
      <Input
        placeholder="Nome do Cliente"
        onChangeText={setOrderOwner}
        value={orderOwner}></Input>
      <InputRegistry
        multiline={true}
        blurOnSubmit={true}
        placeholder="Registre seu Pedido"
        value={orderItems}
        onChangeText={setOrderItems}></InputRegistry>
      {successMessage !== '' && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}
      {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
      <Botton>
        <BottonTitle onPress={handleSendOrder}>Adicionar</BottonTitle>
      </Botton>
    </Container>
  );
}
