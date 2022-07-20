import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY1};
`;

export const Box = styled.View`
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding: 60px;
    border-radius: 4px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 21px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.COLORS.PRIMARY2};
`;

export const Input = styled.TextInput`
    width: 190px;
    height: 50px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding-left: 12px;
    border-radius: 4px;
    border-width: 2px;
    margin-bottom: 26px;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.TEXT};
`;
export const Botton = styled.TouchableOpacity`
    width: 100px;
    height: 50px;
    margin-top: 5px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY2};
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;
export const BottonTitle = styled.Text`
    font-size: 19px;
    color: ${({ theme }) => theme.COLORS.INPUT2};
`;