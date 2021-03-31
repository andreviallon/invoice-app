import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }

    html, body {
        background: white;
        color: black;
        transition: all 0.25s ease-in-out;
        margin: 0;
        padding: 0;
        font-weight: 400;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    textarea:focus, input:focus{
        outline: none;
    }
`;
