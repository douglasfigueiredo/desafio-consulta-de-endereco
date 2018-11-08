import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: #2d2d2d;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    color: #fff;
    font-size: 32px;
  }
`;

export default GlobalStyle;
