import styled from 'styled-components/native';

export const ModalStyle = styled.View`
    background-color: ${({ theme }) => theme.COLORS.INPUT2};
    padding: 15px;
    margin: 75px;
    margin-top: 300px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.INPUT1};
`;
export const ModalTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.PRIMARY2};

`;
export const ButtonStyle = styled.View`
    flex-direction: row;
    margin-top: 10px;
    border-radius: 10px;
    justify-content: space-evenly;
`;