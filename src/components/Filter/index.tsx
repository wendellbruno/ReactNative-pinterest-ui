import React from 'react';
import { PressableProps, Text, Pressable } from 'react-native';

import { styles } from './styles';
import { FilterProps } from './filter';

export const Filter = ({title, selected,...rest}: PressableProps & FilterProps) => {
  return (
    <Pressable {...rest} style={[styles.ContainerPressable, selected && styles.PressableSelected]} >
        <Text style={styles.Text}>
        {title}
        </Text>
    </Pressable>
  );
}
