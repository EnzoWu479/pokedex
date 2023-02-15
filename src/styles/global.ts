import { createGlobalStyle } from "styled-components";
import FadeInAnimation from "../shared/Animations/FadeInAnimation";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    tr{
      animation: ${FadeInAnimation} ease 0.3s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
    *:focus{
      outline: none;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    @keyframes rendering{
        from{
            opacity:0
        }
        to{
            opacity:1
        }
    }
`;
