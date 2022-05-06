import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    background-image: linear-gradient( to right, #3b82f6, #a855f7 );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #__next {
    height: 100%;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
