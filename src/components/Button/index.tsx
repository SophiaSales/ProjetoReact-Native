import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';

export function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>Login</Text>
    </TouchableOpacity>
  );
}
