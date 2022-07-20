import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color:${({ theme }) => theme.COLORS.SECUNDARY1};
`;

export const Title = styled.Text`
    font-size: 23px;
    color: ${({ theme }) => theme.COLORS.PRIMARY2};
    margin-top: 100px;
    margin-bottom: 10;
`;

export const Input = styled.TextInput`
    width: 350px;
    height: 50px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding-left: 12px;
    border-radius: 3px;
    border-width: 1px;
    font-size: 17;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: 20px;
`;

export const InputRegistry = styled.TextInput`
    width: 350px;
    height: 90px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding-left: 12px;
    padding-top: 10px;
    border-radius: 3px;
    border-width: 1px;
    font-size: 17px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: 20px;
    margin-bottom: 30px;
`;
export const Botton = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY2};
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;

export const BottonTitle = styled.Text`
    font-size: 19px;
    color: ${({ theme }) => theme.COLORS.INPUT2};
`;
