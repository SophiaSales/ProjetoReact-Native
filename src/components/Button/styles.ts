import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 50,
        marginTop: 5,
        backgroundColor: theme.colors.purpleDark,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    title: {
        fontSize: 19,
        color: theme.colors.white
    }
});