import React from 'react';
import {ScrollView} from 'react-native';
import {ModalDelete} from '../../components/ModalDelete';

import {Card, Container, Title} from './styles';

export function Order() {
  return (
    <Container>
      <ScrollView>
        <Title>Pedidos</Title>
        <Card>
          <ModalDelete />
        </Card>
      </ScrollView>
    </Container>
  );
}
