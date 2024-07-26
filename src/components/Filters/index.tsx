import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';

import { Filter } from '../Filter';
import { FiltersProps } from './filters';

export const Filters = ({filters, onChange, titleSelected}: FiltersProps) => {
  return <FlatList
    data={filters}
    keyExtractor={item => item}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => 
    <Filter title={item} 
    selected = {item === titleSelected}
    onPress={() => onChange(item)}
    /> }
    style={styles.Container}
    contentContainerStyle={styles.Content}
    />;
}
