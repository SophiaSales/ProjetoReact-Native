import styled from 'styled-components/native';

export const ModalStyle = styled.View`
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding: 15px;
    margin: 70px;
    margin-top: 300px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
`;
export const ModalTitle = styled.Text`
    font-size: 21px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PRIMARY2};

`;
export const ButtonStyle = styled.View`
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-evenly;

`;