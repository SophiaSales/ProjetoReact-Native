import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {Requests} from '../pages/Requests';
import {Registry} from '../pages/Registry';

export type propsBottomTab = {
  Registry: undefined;
  Requests: undefined;
};
export type propsStack = BottomTabNavigationProp<propsBottomTab>;

const Stack = createBottomTabNavigator<propsBottomTab>();

export function TabRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registry"
        component={Registry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Requests"
        component={Requests}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
