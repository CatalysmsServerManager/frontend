import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '@csmm/ui/index';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *::selection{
    color: white;
    background-color: ${({ theme }): string => theme.colors.primary};
  }
  :root{
    font-size: 62.5%; /* (62.5/100) * 16px = 10px */
  }
  html, body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    scroll-behavior: 'smooth';
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,h2,h3,h4,h5,h6,p,a,button,label,input,div,textarea{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    letter-spacing: .5px;
    line-height: 1.5;
    transition: 0.4s color;
    color: ${({ theme }) => theme.colors.text};
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }): string => theme.colors.secondary};
  }
  h1 { font-size: 4rem; }
  h2 { font-size: 2.5rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  p { font-size: 1.225rem; }

  a {
    font-weight: 900;
    text-decoration: none;
    font-size: 1.225rem;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }

  input{
     display: block;
     padding: 0;
  }
  button{
    cursor: pointer;
  }

  li::marker{
    color: ${({ theme }): string => theme.colors.primary};
  }
  button, button:active, button:focus button::-moz-focus-inner, a,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner {
  border: none;
  outline: none;
  border-style: none;
  }

`;
