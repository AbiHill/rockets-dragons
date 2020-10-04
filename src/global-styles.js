import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: Verdana, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #071d36;
  color: #ffffff;
  font-size: 16px;
}

h1, h2 {
  font-family: 'Limelight', cursive;
}
`;

export default GlobalStyles;
