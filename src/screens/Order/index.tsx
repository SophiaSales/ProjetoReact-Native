import React, {useEffect, useState} from 'react';
import {CardOrder} from '../../components/CardOrder';
import {Container, Title} from './styles';
import {ScrollView, RefreshControl} from 'react-native';
import OrdersAPI from '../../API/Orders';

type OrderType = {
  orderNumber: number;
  orderOwner: string;
  orderItems: string[];
};

export const Order = () => {
  const [data, setData] = useState<OrderType[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const OrdersScreen = async () => {
    try {
      const response = await OrdersAPI.getOrders();
      console.log('response data', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await OrdersAPI.getOrders();
      console.log('response data', response.data);
      setData(response.data);
      setRefreshing(false);
    } catch (error) {
      console.error('Error: ', error);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    OrdersScreen();
  }, []);

  return (
    <Container>
      <Title>Pedidos</Title>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
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
