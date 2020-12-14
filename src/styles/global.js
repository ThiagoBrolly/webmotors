import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, select, input, button, label {
    font-size: 14px;
    font-family: Roboto, Helvetica, Sans-serif;

  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    width: 960px;
    margin: 0 auto;
    padding: 50px 10px;

   @media (max-width: 800px) {
      padding: 10px;
      width: 360px;
    }
  }

  button {
    cursor: pointer;
  }
`;
