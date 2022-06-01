import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: theme.colors.purpleDark,
        marginTop: 70,
        marginBottom: 90
    },
    input: {
        width: 350,
        height: 50,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        paddingLeft: 12,
        borderRadius: 3,
        borderWidth: 1,
        fontSize: 19,
        color: 'black'
    },
    inputRegistry: {
        width: 350,
        height: 50,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        padding: 12,
        borderRadius: 3,
        borderWidth: 1,
        fontSize: 19,
        color: 'black'
    },
    checkbox: {
        padding: 20,
    },
    botton: {
        width: 150,
        height: 50,
        // marginTop: 250,
        backgroundColor: theme.colors.purpleDark,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    bottonTitle: {
        fontSize: 19,
        color: theme.colors.white
    }
});