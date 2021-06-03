import { FC, useState, useEffect } from 'react';
import { styled } from '@csmm/ui';
import { Route } from 'react-router-dom';
import { NotAuthenticated } from '../pages';
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
  element: React.ReactElement | null;
  path: string;
}

export const AuthenticatedRoute: FC<AuthenticatedRouteProps> = ({ element, path }) => {
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
  if (isAuth) return (<Route element={element} path={path} />);
  return <Route element={<NotAuthenticated />} path={path} />;
};
