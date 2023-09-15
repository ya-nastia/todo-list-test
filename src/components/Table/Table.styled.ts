import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 750px;
    padding: 6px;

    overflow-x: auto;
    max-height: 384px;

    border: 2px solid ${({theme}) => theme.borderColor};
    border-radius: 6px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({theme}) => theme.borderColor};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.greenColor}; 
    }
`;

export const Table = styled.table`
    width: 100%;
    color: ${({theme}) => theme.fontColor};

    border-collapse: collapse;

    table-layout: fixed;
`;

export const HeadRow = styled.tr`
    background-color: ${({theme}) => theme.borderColor};
`;

export const HeadCell = styled.td`
    width: 25%;
    padding: 6px 40px;

    line-height: 100%;
`;

export const Row = styled.tr<{ isRowFocused: boolean }>`
    background-color: ${({isRowFocused, theme}) => isRowFocused ? theme.greenColor : 'transparent'};
`;

export const Cell = styled.td`
    width: 25%;
    
    overflow: hidden;
    text-overflow: ellipsis;
`;