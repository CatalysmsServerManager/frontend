import { FC, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import * as Sentry from '@sentry/react';
import icon from './images/csmm-icon.png';
import { ErrorFallback, NetworkDetector, theme, GlobalStyle, SnackbarProvider } from '@csmm/ui';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { UserContext, UserData, AuthContext, AuthProvider } from './context';

// css required for simplebarReact (visually pleasing scrollbars).
import 'simplebar/dist/simplebar.min.css';

const defaultUserData: UserData = {
  discordId: null,
  email: null,
  firstName: null,
  lastName: null,
  steamId: null
};

const App: FC = () => {
  const [userData, setUserData] = useState<Partial<UserData>>(defaultUserData);
  const providerUserData = useMemo(() => ({ userData, setUserData }), [userData, setUserData]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <link href={icon} rel="icon" type="image/png" />
          <meta content={theme.colors.primary} name="theme-color" />
        </Helmet>
        <Sentry.ErrorBoundary fallback={ErrorFallback}>
          <UserContext.Provider value={providerUserData}>
            <SnackbarProvider>
              <AuthContext.Provider value={AuthProvider()}>
                <GlobalStyle />
                <Router />
                <NetworkDetector />
              </AuthContext.Provider>
            </SnackbarProvider>
          </UserContext.Provider>
        </Sentry.ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default Sentry.withProfiler(App);
