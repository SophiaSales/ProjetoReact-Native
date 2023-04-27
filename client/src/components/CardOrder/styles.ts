import styled from 'styled-components/native';

export const Card = styled.View`
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    width: 370px;
    height: 150px;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
    margin-bottom: 30px
`;

export const Num = styled.Text`
    font-size: 20px;
`;