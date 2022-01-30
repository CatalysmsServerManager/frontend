import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    primary: '#3CCD6A',
    secondary: '#3a4763',
    tertiary: '#be81f6',
    quaternary: '#1683F7',

    placeholder: '#f5f5f5',
    placeholderHighlight: '#ffffff',

    white: '#ffffff',
    gray: '#d3d3d3',
    background: '#e8edf5',
    shadow: 'rgb(0 0 0 / 10%) 0px 15px 45px 0px',
    text: '#3a4763',

    info: '#1683F7',
    success: '#3CCD6A',
    warning: '#f57c00',
    error: '#FF4252',

  },
  gradient: {
    primary: 'linear-gradient(to right, #3CCD6A 0%, #2BBC59 51%, #3CCD6A 100%)',
    secondary: 'linear-gradient(to right, #65f6e8 0%,#be81f6  51%, #65f6e8 100%)',
    white: 'linear-gradient(180deg, #fff 0%, #fff 100%)', // compatibility reasons
  },
  spacing: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem'
  },
  fontSize: {
    title: {
      tiny: '1rem',
      small: '1.3rem',
      medium: '1.825rem',
      mediumLarge: '2.825rem',
      large: '4.25rem',
      huge: '6rem'

    }
  }
};

export type ThemeType = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
