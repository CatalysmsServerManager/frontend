import { FC, useEffect, useState, Fragment } from 'react';
import { UserData } from 'context';
import { Redirect } from 'pages';
import { Loading } from '@csmm/ui';
import { useAuth, useUser } from 'hooks';

// everytime we co a return we will update the session
export const Return: FC = () => {
  const { setUserData } = useUser();
  const { getSession } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session: UserData | null) => {
      if (session) {
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
