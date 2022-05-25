import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: 190,
        height: 50,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        paddingLeft: 12,
        borderRadius: 4,
        borderWidth: 2,
        marginBottom: 26,
    },
    title: {
        fontSize: 20,
        color: 'black'
    }
});