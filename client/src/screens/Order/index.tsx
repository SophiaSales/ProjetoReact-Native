import React, {useEffect, useState} from 'react';
import {CardOrder} from '../../components/CardOrder';
import {Container, Title} from './styles';
import {api} from '../../libs/api';
import {ScrollView} from 'react-native';

type OrderType = {
  orderNumber: number;
  orderOwner: string;
  orderItems: string[];
};

export const Order = () => {
  const [data, setData] = useState<OrderType[]>([]);

  const getOrders = async () => {
    try {
      const response = await api.get('/orders');
      console.log(response.data);
      setData(response.data);
    } finally {
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Container>
      <Title>Pedidos</Title>
      <ScrollView>
        {data.map(item => (
          <React.Fragment key={item.orderNumber}>
            <CardOrder
              num={item.orderNumber}
              client={item.orderOwner}
              orders={item.orderItems}
            />
          </React.Fragment>
        ))}
      </ScrollView>
    </Container>
  );
};
