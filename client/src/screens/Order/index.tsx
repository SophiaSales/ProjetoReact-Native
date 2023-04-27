import React, {useEffect, useState} from 'react';
import {CardOrder} from '../../components/CardOrder';
import {Card, Container, Title} from './styles';
import {api} from '../../libs/api';

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
      <Card>
        {data.map(item => (
          <CardOrder
            num={item.orderNumber}
            client={item.orderOwner}
            orders={item.orderItems}
          />
        ))}
      </Card>
    </Container>
  );
};
