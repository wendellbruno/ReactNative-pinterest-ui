import { Filters, Posts } from '@/components';
import { theme } from '@/theme';
import { FILTERS  } from '@/utils/filters';
import { POSTS } from '@/utils/posts';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <View style={styles.Container}>
        <Filters filters={FILTERS} titleSelected={filter} onChange={setFilter}  />

        <Posts posts={POSTS} />
    </View>
  );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 12,
        paddingTop: 52,
        backgroundColor: theme.colors.black
    },
    text:{
        fontSize: 22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold
    }
});