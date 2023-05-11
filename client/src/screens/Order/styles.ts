import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY1};
`;

export const Title = styled.Text`
    font-size: 23px;
    color: ${({ theme }) => theme.COLORS.PRIMARY2};
    margin-top: 100px;
    margin-bottom: 10px;
    text-align: center;
`;
