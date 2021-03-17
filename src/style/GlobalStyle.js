import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --slack-bg: #350d36;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .main {
        display: flex;
        min-height: calc(100vh - 50px);
    }

    a {
        text-decoration: none
    }
    ul {
        list-style: none;
    }
    input, button, textarea {
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        &:focus {
            outline: none;
        }
    }
    body {
        font-family: 'Poppins', sans-serif;
    }
`;
