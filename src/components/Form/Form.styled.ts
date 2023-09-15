import styled from "styled-components";

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 410px;
    padding: 16px 10px;

    border: 2px solid ${({theme}) => theme.borderColor};
    border-radius: 6px;
`;

export const FormHeader = styled.span`
    position: absolute;
    top: -11px;
    left: 15px;

    line-height: 100%;
    color: ${({theme}) => theme.fontColor};

    background-color: ${({theme}) => theme.bgColor};
`;