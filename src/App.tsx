import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignIn />
      <StatusBar backgroundColor="transparent" translucent />
    </SafeAreaView>
  );
};

export default App;
