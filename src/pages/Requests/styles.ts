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
    }
});