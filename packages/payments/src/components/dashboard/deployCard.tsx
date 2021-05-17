import { FC, Fragment, useEffect, useState, useContext } from 'react';
import { httpService } from '../../services';
import { Card } from './card';
import { ThemeContext } from 'styled-components';
import { ThemeType } from '../../constants/theme';
import { Subscription } from '@prisma/client';
import { SUBSCRIPTION_STATES } from '../../enums';
import { useNavigate } from 'react-router-dom';

export const DeployCard: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasDeploy, setDeploy] = useState<boolean>(false);
  const [subscriptionId, setSubscriptionId] = useState<string>();
  const themeContext = useContext<ThemeType>(ThemeContext);
  const navigate = useNavigate();

  function startDeploy() {
    // send info with parameters
    navigate(`/deploy/${subscriptionId}`);
    // add subscription data to query params.
  }

  async function getSubscriptions() {
    const response = await httpService.get('/subscription');
    if (response.ok) {
      const subscriptions = await response.json() as Subscription[];
      const deploy = subscriptions.find((subscription) => subscription.state === SUBSCRIPTION_STATES.DEPLOY);

      // order this (new first) so we get the latest server.
      if (deploy) {
        setSubscriptionId(deploy.id);
        setDeploy(true);
      };
      setLoading(false);
    }
  }

  // check if there is a server
  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <Fragment>
      <Card
        bgColor={hasDeploy ? themeContext.c : '#fff'}
        description={hasDeploy ? 'ready' : 'None'}
        loading={loading}
        onClick={hasDeploy ? startDeploy : undefined}
        textColor={hasDeploy ? '#fff' : themeContext.s}
        title='Deployment:'
      />
    </Fragment>
  );
};
