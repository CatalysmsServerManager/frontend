import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    primary: '#00cd6a',
    secondary: '#fda085',
    tertiary: '#be81f6',
    quaternary: '#65f6e8',

    placeholder: '#f5f5f5',
    placeholderHighlight: '#ffffff',

    white: '#ffffff',
    gray: '#d3d3d3',
    background: '#e8edf5',
    shadow: 'rgb(0 0 0 / 10%) 0px 15px 45px 0px',
    text: '#d5dae0',

    info: '#1E92F4',
    success: '#00cd6a',
    warning: '#f57c00',
    error: '#FF4252',

  },
  gradient: {
    primary: 'linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)',
    secondary: 'linear-gradient(to right, #65f6e8 0%,#be81f6  51%, #65f6e8 100%)',
    white: 'linear-gradient(180deg, #fff 0%, #fff 100%)', // compatibility reasons
  },
  spacing: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem'
  },
  fontSize: {
    tiny: '1rem',
    small: '1.3rem',
    medium: '1.825rem',
    mediumLarge: '2.825rem',
    large: '4.25rem',
    huge: '6rem'
  }
};

export type ThemeType = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
