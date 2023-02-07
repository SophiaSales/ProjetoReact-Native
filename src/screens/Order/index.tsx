import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Botton, Card, Container, Title} from './styles';

export function Order() {
  return (
    <Container>
      <Title>Pedidos</Title>
      <Card>
        <Botton>
          <MaterialIcons name="clear" color={'#F08080'} size={30} />
        </Botton>
      </Card>
    </Container>
  );
}
