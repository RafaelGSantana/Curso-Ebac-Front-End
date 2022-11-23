import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

      body {
      background: #919191;
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
`;