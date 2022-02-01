import { FC, useState, useEffect } from 'react';
import { styled } from '@csmm/ui';
import { Outlet, Route } from 'react-router-dom';
import { UnAuthorized, Frame } from '../pages';
import { useAuth } from 'hooks';
import { Loading } from '@csmm/ui';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface AuthenticatedRouteProps {
  showFrame?: boolean;
}

export const AuthenticatedRoute: FC<AuthenticatedRouteProps> = ({ showFrame = true }) => {
  const { isAuthenticated } = useAuth();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(true);

  useEffect(() => {
    handleAuth();
  }, []);

  async function handleAuth() {
    if (await isAuthenticated()) {
      setIsAuth(true);
    }
    isLoading(false);
  };

  if (loading) return <Container><Loading fill="#fff" /></Container>;
  if (isAuth) return showFrame ? <Frame>< Outlet /></Frame > : <Outlet />;
  return <Route element={<UnAuthorized />} path="/login" />;
};
