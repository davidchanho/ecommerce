import { createGlobalStyle } from "styled-components";
import * as fonts from "./fonts";

const GlobalStyles = createGlobalStyle`
   html, body {
  padding: 0;
  margin: 0;
  font-size: ${fonts.fontSize};
  font-family: ${fonts.fontFamily};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
