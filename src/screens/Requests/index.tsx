import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Botton, Card, Container, Title} from './styles';

export function Requests() {
  return (
    <Container>
      <Title>Pedidos</Title>
      <Card>
        <Botton>
          <MaterialIcons name="delete" color={'red'} size={30} />
        </Botton>
      </Card>
    </Container>
  );
}
