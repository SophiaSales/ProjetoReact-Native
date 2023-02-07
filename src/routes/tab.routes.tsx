import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {Order} from '../screens/Order';
import {Registry} from '../screens/Registry';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import themes from '../theme/themes';

export type propsBottomTab = {
  Registry: undefined;
  Order: undefined;
};
export type propsStack = BottomTabNavigationProp<propsBottomTab>;

const Stack = createBottomTabNavigator<propsBottomTab>();

export function TabRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: themes.COLORS.PRIMARY2,
        tabBarInactiveTintColor: themes.COLORS.INPUT1,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}>
      <Stack.Screen
        name="Registry"
        component={Registry}
        options={{
          headerShown: false,
          tabBarLabel: 'Registro',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="post-add" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="article" color={color} size={size} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
