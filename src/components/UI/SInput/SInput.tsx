import styled from 'styled-components';

const SInput = styled.input`
    width: 100%;
    padding: 14px;

    color: ${({theme}) => theme.fontColor};

    background-color: transparent;
    border: 2px solid ${({theme}) => theme.borderColor};
    border-radius: 6px;

    &::placeholder {
        color: ${({theme}) => theme.fontColor};
    }
`;

export default SInput;