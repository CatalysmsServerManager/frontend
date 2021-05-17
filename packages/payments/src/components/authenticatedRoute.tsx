import { FC, useState, useEffect } from 'react';
import { authenticationService } from '../services/authenticationService';
import { Route } from 'react-router-dom';
import { NotAuthenticated } from '../pages';

interface IProps {
  element: React.ReactElement | null;
  path: string;
}

export const AuthenticatedRoute: FC<IProps> = ({ element, path }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(true);

  useEffect(() => {
    authenticationService.isAuthenticated().then((session) => {
      if (session && session.steamId) {
        setAuthenticated(true);
      }
      isLoading(false);
    });
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (isAuthenticated) {
    return (<Route element={element} path={path} />);
  }
  return <Route element={<NotAuthenticated />} path={path} />;
};
