import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: Verdana, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
}

ul {
  list-style-type: none; 
}

`;
