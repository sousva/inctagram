import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({theme}) => theme.bodyColor};
    color: ${({theme}) => theme.textColor};
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
`
