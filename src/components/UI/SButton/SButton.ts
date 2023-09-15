import styled from 'styled-components';

const SButton = styled.button`
    display: flex;
    justify-content: center;
    padding: 14px;

    color: ${({theme}) => theme.fontColor};

    background-color: ${({theme}) => theme.btnColor};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.buttonHover};
    }
`;

export default SButton;