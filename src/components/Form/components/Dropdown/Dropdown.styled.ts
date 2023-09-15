import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;

    & .ant-select {
        width: 100%;
    }

    && .ant-select-selector {
        height: auto;
        padding: 14px;

        background-color: transparent;
        border: 2px solid ${({theme}) => theme.borderColor};
    }

    && .ant-select-selection-item,
    &.ant-select-open .ant-select-selection-item {
        line-height: 100%;
        color: ${({theme}) => theme.fontColor};
    }

    && .ant-select-selector:after {
        line-height: normal;
    }

    & .ant-select-arrow {
        top: 0;
        right: 0;
        justify-content: center;
        height: 100%;
        margin: 0;
        min-width: 48px;
        padding: 14px;

        background-color: ${({theme}) => theme.btnColor};
        border-radius: 0 6px 6px 0;

        &:hover {
            background-color: ${({theme}) => theme.buttonHover};
        }
    }

    & .ant-select-arrow svg {
        width: 10px;
        height: 10px;
        fill: ${({theme}) => theme.arrowColor};
    }

    & .ant-select-open .ant-select-arrow svg {
        transform: rotate(180deg);
    }
`;