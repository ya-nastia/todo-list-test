import styled from "styled-components";
import checkIcon from '../../../../assets/img/checkbox-icon.svg';

export const Checkbox = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked+label::before {
        border-color: ${({theme}) => theme.greenColor};
        background-color: ${({theme}) => theme.greenColor};
        background-image: url(${checkIcon});
    }
`;

export const Label = styled.label`
    display: inline-flex;
    align-items: center;
    user-select: none;

    color: ${({theme}) => theme.fontColor};

    &::before {
        content: '';
        display: inline-block;
        margin-right: 0.5em;
        width: 22px;
        height: 22px;
        flex-shrink: 0;
        flex-grow: 0;

        border: 2px solid ${({theme}) => theme.greenColor};
        border-radius: 0.25em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 70% 70%;
    }
`;