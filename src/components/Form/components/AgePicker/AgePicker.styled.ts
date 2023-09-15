import styled from 'styled-components';
import { SButton } from '../../../UI/SButton';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const Buttons = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
`;

export const Button = styled(SButton)`
    align-items: center;
    height: 100%;
    min-width: 48px;

    &:first-child {
        border-radius: unset;
    }

    &:last-child {
        border-right: 1px solid ${({theme}) => theme.agePickerBtnBorder};
        border-radius: 6px 0 0 6px;
        transform: rotate(180deg);
    }

    & svg {
        width: 10px;
        height: 10px;
        fill: ${({theme}) => theme.arrowColor};
    }
`;