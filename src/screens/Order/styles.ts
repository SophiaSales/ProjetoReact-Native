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

export const Card = styled.View`
    align-items: flex-end;
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    width: 370px;
    height: 150px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
    margin-bottom: 30px
`;
