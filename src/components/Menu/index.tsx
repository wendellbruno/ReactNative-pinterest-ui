import React, {ForwardedRef, forwardRef} from 'react';
import { View, Text } from 'react-native';
import BottomSheet from "@gorhom/bottom-sheet";
import { MenuProps } from './menu';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { MenuButton } from '../MenuButton';

export const Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
  return (
    <BottomSheet ref={ref} snapPoints={[0.1, 250]} backgroundStyle={styles.Container}>
      <View style={styles.Content}>
        <View style={styles.Header}>
        <FontAwesome name='close' size={24} onPress={onClose} style={styles.IconClose} />
        <Text style={styles.Title}>Comece a criar agora</Text>
        </View>

        <View style={styles.Opitions}>
          <MenuButton title="Pin" icon="home"/>
          <MenuButton title="Copy" icon="paste" />
          <MenuButton title="Folder"  icon="folder"/>
        </View>
      </View>
    </BottomSheet>
)
})
