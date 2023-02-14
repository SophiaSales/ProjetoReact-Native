import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Button, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import themes from '../../theme/themes';

import {ModalStyle, ModalTitle, ButtonStyle} from './styles';

export function ModalDelete() {
  const [visivel, setVisivel] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <ModalStyle>
          <ModalTitle>Apagar pedido?</ModalTitle>
          <ButtonStyle>
            <Button
              title="Cancelar"
              color={themes.COLORS.PRIMARY2}
              onPress={() => {
                setVisivel(false);
              }}
            />
            <Button
              title="Apagar"
              color={themes.COLORS.PRIMARY2}
              onPress={() => {
                setVisivel(false);
              }}
            />
          </ButtonStyle>
        </ModalStyle>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setVisivel(true);
        }}>
        <Text>
          <MaterialIcons name="clear" color={'#F08080'} size={30} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
