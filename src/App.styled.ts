import styled from "styled-components";

export const AppContainer = styled.main`
    height: 100vh;
    background-color: ${({theme}) => theme.bgColor};
`;

export const Content = styled.div`
    display: flex;
    gap: 40px;

    max-width: 1300px;
    padding: 20px 40px;
`;