import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Login</Text>
    </TouchableOpacity>
  );
}
