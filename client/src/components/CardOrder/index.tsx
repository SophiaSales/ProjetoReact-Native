import React, {useState} from 'react';
import {Card, TextNum, TextClient, TextOrder} from './styles';
import {ModalDelete} from '../ModalDelete';
import {View} from 'react-native';

export function CardOrder(props: any) {
  const [cardVisible, setCardVisible] = useState(true);

  const hideCard = () => {
    setCardVisible(false);
  };
  return (
    <>
      {cardVisible && (
        <Card>
          <View>
            <TextNum>Pedido: {props.num}</TextNum>
            <TextClient>Cliente: {props.client}</TextClient>
            <TextOrder>Itens: {props.orders}</TextOrder>
          </View>
          <View>
            <ModalDelete onHide={hideCard} />
          </View>
        </Card>
      )}
    </>
  );
}
