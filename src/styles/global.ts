import { createGlobalStyle } from "styled-components";
import FadeInAnimation from "../shared/Animations/FadeInAnimation";
import isDay from "../utils/isDay";

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
    height: 100vh;
    background: ${
      isDay
        ? `linear-gradient(180deg, #73320D 0%, #F28C0F 50%,#73320D 100%)`
        : `linear-gradient(180deg, #011526 0%, #024873 50%,#011526 100%)`
    };
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
