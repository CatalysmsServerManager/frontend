import { FC, useEffect, useContext, useState, Fragment } from 'react';
import { authenticationService } from '../../services';
import { IUserData, UserContext } from '../../context';
import { Redirect } from '../redirect';
import { Loading } from '@csmm/ui';

// everytime we co a return we will update the session
export const Return: FC = () => {
  const { setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  async function getSession(): Promise<IUserData | null> {
    return await authenticationService.isAuthenticated();
  }

  useEffect(() => {
    getSession().then((session: IUserData | null) => {
      if (session && setUserData) {
        setUserData(session);
      }
      setLoading(false);
      // no matter what we return to the page set in redirect url.
    });
  }, []);

  return (
    <Fragment>
      {loading ? <Loading /> : <Redirect />}
    </Fragment>
  );
};
