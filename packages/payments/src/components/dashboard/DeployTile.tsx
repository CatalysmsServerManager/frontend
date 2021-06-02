import { FC, Fragment, useEffect, useState } from 'react';
import { httpService } from '../../services';
import { Tile } from '@csmm/ui';
import { Subscription } from '@prisma/client';
import { SUBSCRIPTION_STATES } from '../../enums';
import { useNavigate } from 'react-router-dom';

export const DeployTile: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasDeploy, setDeploy] = useState<boolean>(false);
  const [subscriptionId, setSubscriptionId] = useState<string>();

  const navigate = useNavigate();

  function startDeploy() {
    navigate(`/deploy/${subscriptionId}`);
  }

  async function getSubscriptions() {
    const response = await httpService.get('/subscription');
    if (response.ok) {
      const subscriptions = await response.json() as Subscription[];
      const deploy = subscriptions.find((subscription) => subscription.state === SUBSCRIPTION_STATES.DEPLOY);

      if (deploy) {
        setSubscriptionId(deploy.id);
        setDeploy(true);
      };
      setLoading(false);
    }
  }

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <Fragment>
      <Tile
        bgColor={hasDeploy ? 'tertiary' : 'white'}
        description={hasDeploy ? 'ready' : 'None'}
        loading={loading}
        onClick={hasDeploy ? startDeploy : undefined}
        textColor={hasDeploy ? 'white' : 'secondary'}
        title="Deployment:"
      />
    </Fragment>
  );
};
