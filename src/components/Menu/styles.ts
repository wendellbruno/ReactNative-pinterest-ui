import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container:{
        backgroundColor: theme.colors.gray[800],
    },
    Content: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    Title: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,
        color: theme.colors.white,
        flex: 1,
        textAlign: 'center',
        marginRight: 24
    },
    Header: {
        flexDirection: 'row',
    },
    IconClose: {
        color: theme.colors.white,
    },
    Opitions: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 32
    }

});