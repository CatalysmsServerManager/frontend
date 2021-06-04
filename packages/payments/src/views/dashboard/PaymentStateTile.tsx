import { FC, useState, useEffect } from 'react';
import { httpService } from '../../services';
import { Subscription } from '@prisma/client';
import { Tile } from '@csmm/ui';
import { SUBSCRIPTION_STATES } from '../../enums';

export const PaymentStateTile: FC = () => {
  const [isOverdue, setOverdue] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  function pay() {
    /* TODO: implement */
  }

  async function getSubscriptionStates() {
    const response = await httpService.get('/subscription');
    if (response.ok) {
      const subscriptions = await response.json() as Subscription[];
      const hasOverdue = subscriptions.find((subscription) => subscription.state === SUBSCRIPTION_STATES.OVERDUE);
      if (hasOverdue) setOverdue(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSubscriptionStates();
  }, []);

  return (
    <Tile
      bgColor={isOverdue ? 'error' : 'primary'}
      description={isOverdue ? 'overdue' : 'paid'}
      loading={loading}
      onClick={isOverdue ? pay : undefined}
      textColor="white"
      title="Payment state: "
    />
  );
};
