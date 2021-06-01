import { FC, useState, useMemo, useEffect, StrictMode } from 'react';
import * as Sentry from '@sentry/react';
import styled from 'styled-components';
import { Router } from './router';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './constants/globalstyle';
import { DEFAULT } from './constants/theme';
import { UserContext, IUserData } from './context';
import { authenticationService } from './services';
import { Loading } from './components';
import { ErrorFallback } from './pages';

// css required for simplebarReact (visually pleasing scrollbars).
import 'simplebar/dist/simplebar.min.css';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.p};
`;

const App: FC = () => {
  const defaultUserData: IUserData = {
    discordId: null,
    email: null,
    firstName: null,
    lastName: null,
    steamId: null
  };

  const [userData, setUserData] = useState(defaultUserData);
  const providerUserData = useMemo(() => ({ userData, setUserData }), [userData, setUserData]);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function getSession(): Promise<IUserData | null> {
    return await authenticationService.isAuthenticated();
  }

  useEffect(() => {
    getSession().then((session: IUserData | null) => {
      if (session) {
        setUserData(session);
      }
      setLoading(false);
      return;
    });
  }, []);

  if (isLoading) {
    return (
      <StrictMode>
        <ThemeProvider theme={DEFAULT}>
          <Sentry.ErrorBoundary fallback={ErrorFallback}>
            <Container>
              <Loading fill="white" />
            </Container>
            <GlobalStyle />
          </Sentry.ErrorBoundary>
        </ThemeProvider>
      </StrictMode>
    );
  }

  return (
    <StrictMode>
      <ThemeProvider theme={DEFAULT}>
        <Sentry.ErrorBoundary fallback={ErrorFallback}>
          <UserContext.Provider value={providerUserData}>
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              autoHideDuration={5000}
              hideIconVariant
              maxSnack={3}
              preventDuplicate
            >
              <GlobalStyle />
              <Router />
            </SnackbarProvider>
          </UserContext.Provider>
        </Sentry.ErrorBoundary>
      </ThemeProvider>
    </StrictMode>
  );
};

export default Sentry.withProfiler(App);
