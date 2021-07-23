import { StrictMode, FC } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './constants';
import { Router } from './Router';
import { theme } from './constants/theme';
import icon from './images/csmm-icon.png';

export const App: FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Helmet>
          <link href={icon} rel="icon" type="image/png" />
          <meta content={theme.main} name="theme-color" />
        </Helmet>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </StrictMode>
  );
};
