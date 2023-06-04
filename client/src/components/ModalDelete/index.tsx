import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Button, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import themes from '../../theme/themes';

import {ModalStyle, ModalTitle, ButtonStyle} from './styles';

type ModalDeleteProps = {
  onHide: () => void;
};

export function ModalDelete(props: ModalDeleteProps) {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  const confirmAction = () => {
    props.onHide(); // Chamada da função onHide para ocultar o card
    setVisible(false);
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ModalStyle>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <ModalTitle>O pedido foi entregue?</ModalTitle>
            <TouchableOpacity onPress={closeModal}>
              <Text>
                <MaterialIcons name="clear" color={'#F08080'} size={30} />
              </Text>
            </TouchableOpacity>
          </View>
          <ButtonStyle>
            <Button
              title="Confirmar"
              color={themes.COLORS.PRIMARY2}
              onPress={confirmAction}
            />
          </ButtonStyle>
        </ModalStyle>
      </Modal>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text>
          <MaterialIcons name="clear" color={'#F08080'} size={30} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
