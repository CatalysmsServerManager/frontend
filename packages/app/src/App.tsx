import React from 'react';
import { Router } from './router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './constants/globalstyle';
import { DEFAULT } from './constants/theme';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={DEFAULT}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
};
