import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.smoke
    },
    title: {
        fontSize: 23,
        color: theme.colors.purpleDark,
        marginTop: 100,
        marginBottom: 10
    },
    input: {
        width: 350,
        height: 50,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        paddingLeft: 12,
        borderRadius: 3,
        borderWidth: 1,
        fontSize: 17,
        color: 'black',
        marginTop: 20
    },
    inputRegistry: {
        width: 350,
        height: 90,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        paddingLeft: 10,
        borderRadius: 3,
        borderWidth: 1,
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        marginBottom: 30
    },
    checkbox: {
        padding: 10,
    },
    botton: {
        width: 150,
        height: 50,
        backgroundColor: theme.colors.purpleDark,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    bottonTitle: {
        fontSize: 19,
        color: theme.colors.white
    }
});