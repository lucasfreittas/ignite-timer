import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.GRAY_700};
    margin: 8rem auto;
    max-width: 112rem;
    height: calc(100vh - 16rem);
    border-radius: 8px;
    padding: 4.8rem;
`;