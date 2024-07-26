import { theme } from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    Image: {
        width: 30,
        height: 30,
        borderRadius: 25
    },
    Selected:{
        borderWidth: 2,
        borderColor: theme.colors.white
    }
})