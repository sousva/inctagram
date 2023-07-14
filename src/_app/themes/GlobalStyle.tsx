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
    height: 100vh;
    font-family: Inter sans-serif;

    &.isModalOpen {
      overflow: hidden;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({theme}) => theme.textColor};
    -webkit-box-shadow: 0 0 0 40rem ${({theme}) => theme.palette.dark['500']} inset;
  }

  //https://css-tricks.com/almanac/selectors/a/autofill/
`
