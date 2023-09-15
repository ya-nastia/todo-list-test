import styled from 'styled-components';

export const SwitchMode = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({theme}) => theme.fontColor};

    & .ant-switch {
        min-width: 70px;
        height: 32px;

        background: ${({theme}) => theme.greenColor};
    }

    & .ant-switch-handle {
        top: 5px;
        width: 22px;
        height: 22px;
        inset-inline-start: 5px;
    }

    & .ant-switch-handle::before {
        background: ${({theme}) => theme.bgColor};
        border-radius: 50%;
    }

    .ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 27px);
    }
`;
