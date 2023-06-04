import styled from 'styled-components/native';

export const Card = styled.View`
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    width: 370px;
    height: 100px;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.INPUT2};
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

export const TextNum = styled.Text`
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
    margin-top: 10px;
`;
export const TextClient = styled.Text`
    font-size: 17px;
    font-weight: 500;
    margin-left: 25px;
`;
export const TextOrder = styled.Text`
    font-size: 17px;
    font-weight: 500;
    margin-left: 25px;
    `;