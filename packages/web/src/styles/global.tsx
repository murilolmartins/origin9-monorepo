import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family} !important;
      color: ${theme.colors.black};
      height: auto;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.gray_50};
      height: 100%;
    }

    #__next {
      height: 100%;
    }

    main {
      height: 100%;
    }

    span,
    p,
    h1,
    h2,
    h3,
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family} !important;
    }

    p {
      font-size: ${theme.font.sizes.medium};
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  


`;

export { GlobalStyles };
