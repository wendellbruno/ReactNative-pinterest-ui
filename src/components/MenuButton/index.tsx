import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { MenuButtonProps } from './menuButton';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '@/theme';

export const MenuButton = ({title, icon}: MenuButtonProps) => {
  return (
      <Pressable style={styles.Container}>
        <FontAwesome name={icon} size={32} color={theme.colors.white} style={styles.icon}/>
        <Text style={styles.Text}>
            {title}
        </Text>
      </Pressable>


  );
}
