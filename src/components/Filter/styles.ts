import { theme } from '@/theme';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    ContainerPressable:{

    },
    Text:{
        color: theme.colors.white,
        fontSize: 16,
        fontFamily: theme.fontFamily.medium
    },
    PressableSelected: {
        borderBottomWidth: 4,
        borderBottomColor: theme.colors.white
    }
})

