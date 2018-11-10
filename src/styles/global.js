import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, div#root {
    background: #FFF;
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
