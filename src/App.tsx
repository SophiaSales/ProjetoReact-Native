import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Routes} from './routes';
import {ThemeProvider} from 'styled-components/native';
import themes from './theme/themes';
const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
        <StatusBar backgroundColor={themes.COLORS.PRIMARY1} translucent />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
