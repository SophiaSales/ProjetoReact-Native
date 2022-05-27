import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Requests} from '../pages/Requests';
import {SignIn} from '../pages/SignIn';

export type propsNavigation = {
  SignIn: undefined;
  Requests: {
    usuario: string;
    senha: string;
  };
};
export type propsStack = NativeStackNavigationProp<propsNavigation>;

const Stack = createNativeStackNavigator<propsNavigation>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Requests"
          component={Requests}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
