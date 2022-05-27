import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Routes} from './routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
      <StatusBar backgroundColor="#A796ff" translucent />
    </SafeAreaView>
  );
};

export default App;
