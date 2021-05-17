import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setRedirect } from '../helpers';
import { routingService } from '../services/routingService';

export const NotAuthenticated: FC = () => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setRedirect(location.pathname);
      routingService.navigateExternal('/auth/steam');
    }, 2000);
  }, []);

  return (
    <div>not authenticated, you are being redirected to signin</div>
  );
};
