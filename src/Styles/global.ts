import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: ${props => props.theme.GRAY_800};
        color: ${props => props.theme.GRAY_200};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        border: none;

    }
`;