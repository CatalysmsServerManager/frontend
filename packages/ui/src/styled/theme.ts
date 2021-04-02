export const theme = {
  colors: {
    primary: '#f6d365',
    secondary: '#fda085',
    tertiary: '#be81f6',
    quaternary: '#65f6e8',
    gray: '#d3d3d3',
    background: '#e8edf5',
    shadow: 'rgb(0 0 0 / 10%) 0px 15px 45px 0px',
    error: '#FF4252',
    text: '#d5dae0',
  },
  gradient: {
    primary: 'linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)',
    secondary: 'linear-gradient(to right, #65f6e8 0%,#be81f6  51%, #65f6e8 100%)'
  },
  spacing: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem'
  }
};

export type ThemeType = typeof theme;
