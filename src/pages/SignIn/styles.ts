import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: theme.colors.white,
        padding: 60,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 50,
    },
    input: {
        width: 190,
        height: 50,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        paddingLeft: 12,
        borderRadius: 4,
        borderWidth: 2,
        marginBottom: 26,
        fontSize: 20,
        color: 'black'
    },
    botton: {
        width: 100,
        height: 50,
        marginTop: 5,
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