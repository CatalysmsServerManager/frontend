import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setRedirect } from 'helpers';
import { routingService } from 'services';
import { Error401 } from '@csmm/ui';

export const UnAuthorized: FC = () => {
  const location = useLocation();
  useEffect(() => {
    setRedirect(location.pathname);
    routingService.navigateExternal('/auth/steam');
  }, []);

  return (
    <Error401 />
  );
};
