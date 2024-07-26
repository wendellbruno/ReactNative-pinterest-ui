import React from 'react';
import { Image, ImageProps } from 'react-native';

import { styles } from './styles';

export const Avatar = ({selected, ...rest}: AvatarProps & ImageProps) => {
  return (
    <Image 
    style={[styles.Image, selected && styles.Selected]} {...rest}
    />
  );
}
