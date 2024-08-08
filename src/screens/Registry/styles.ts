import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color:${({ theme }) => theme.COLORS.SECUNDARY1};
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.PRIMARY2};
    margin-top: 100px;
    margin-bottom: 10;
`;

export const Input = styled.TextInput`
    width: 350px;
    height: 50px;
    border-color: ${({ theme }) => theme.COLORS.INPUT2};
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding-left: 12px;
    border-radius: 10px;
    border-width: 1px;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: 20px;
    shadow-color: ${({ theme }) => theme.COLORS.SHADOW};
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    elevation: 5;
`;

export const InputRegistry = styled.TextInput`
    width: 350px;
    height: 95px;
    border-color: ${({ theme }) => theme.COLORS.INPUT2};
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding-left: 12px;
    padding-bottom: 40px;
    padding-top: 10px;
    border-radius: 10px;
    border-width: 1px;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: 20px;
    margin-bottom: 30px;
    shadow-color: ${({ theme }) => theme.COLORS.SHADOW};
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
    elevation: 5;
`;
export const Botton = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY2};
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const BottonTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.INPUT2};
`;

export const SuccessMessage = styled.Text`
    color: green;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 400;
`;

export const ErrorMessage = styled.Text`
    color: red;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 400;
`;