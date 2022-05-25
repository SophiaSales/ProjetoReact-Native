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
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 50,
    },
});