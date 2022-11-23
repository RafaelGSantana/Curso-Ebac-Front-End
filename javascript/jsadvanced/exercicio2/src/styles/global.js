import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

      body {
      background: #1d1b1f;
      color: #fff;
      -webkit-font-smoothing: antialiased;
   }

   body, input, button {
      font-family: 'Roboto', serif;
      font-size: 62.5%;
   }

   h1, h1, h3, h4, h5, h6, strong {
      font-weight: 500;
   }

   button {
      cursor: pointer;
   }

   .header, main, footer {
      width: 100%;
   }

   .container {
      width: 100%;
      max-width: 91.15%;
      margin: 0 auto;
   }
`;