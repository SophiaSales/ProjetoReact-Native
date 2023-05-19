import React, {useEffect, useState} from 'react';
import {CardOrder} from '../../components/CardOrder';
import {Container, Title} from './styles';
import {ScrollView} from 'react-native';
import OrdersAPI from '../../API/Orders';

type OrderType = {
  orderNumber: number;
  orderOwner: string;
  orderItems: string[];
};

export const Order = () => {
  const [data, setData] = useState<OrderType[]>([]);

  const OrdersScreen = async () => {
    try {
      const response = await OrdersAPI.getOrders();
      console.log('response data', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  useEffect(() => {
    OrdersScreen();
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
