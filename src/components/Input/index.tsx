import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import {styles} from './styles';

export function Input(props: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.title} />
    </View>
  );
}
