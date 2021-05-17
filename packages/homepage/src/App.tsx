import { StrictMode, FC } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './constants';
import { Router } from './Router';
import { theme } from './constants/theme';

export const App: FC = () => {
  /* TODO: import theme primary color from context to set meta content color */
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta charSet="UTF-8" />
          <base href="/" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <meta content="true" name="HandHeldFriendly" />
          <meta content="index, follow" name="robots" />
          <meta content="Massief.biz" name="author" />
          <meta content="Massief.biz" name="designer" />
          <meta content="csmm" name="copyright" />
          <meta content="CSMM is a web based server manager for 7 Days to die. Bring your server(s) to the next level with CSMMs advanced features! Join hundreds of other servers in a new generation of server management." name="description" />
          <meta content="7 Days to Die, server manager, web, cloud, open source, csmm, Catalysm, Massief, 7 Days to Die server manager, monitor" name="keywords" />
          <title>CSMM | THE 7 Days to Die Server manager you need.</title>
          <link href="https://csmm.app/" rel="canonical" />
          <meta content="#28B766" name="theme-color" />
        </Helmet>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </StrictMode>
  );
};
