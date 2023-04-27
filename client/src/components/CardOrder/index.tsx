import React from 'react';
import {Card} from './styles';
import {ModalDelete} from '../ModalDelete';
import {Text, View} from 'react-native';

export function CardOrder(props: any) {
  return (
    <Card>
      <View>
        <Text style={{fontSize: 20, marginLeft: 10, marginTop: 10}}>
          Pedido: {props.num}
        </Text>
        <Text style={{fontSize: 17, marginLeft: 25}}>
          Cliente: {props.client}
        </Text>
        <Text style={{fontSize: 17, marginLeft: 25}}>
          {' '}
          Itens: {props.orders}
        </Text>
      </View>
      <View>
        <ModalDelete />
      </View>
    </Card>
  );
}
