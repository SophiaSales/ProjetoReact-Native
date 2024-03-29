import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {SignIn} from '../screens/SignIn';
import {Register} from '../screens/Register';
import {TabRoutes} from './tab.routes';

export type propsNavigation = {
  SignIn: undefined;
  Register: undefined;
  TabRoutes: undefined;
};
export type propsStack = NativeStackNavigationProp<propsNavigation>;

const Stack = createNativeStackNavigator<propsNavigation>();

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
