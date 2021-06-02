import { FC, useState, useEffect } from 'react';
import { httpService } from '../../services';
import { Subscription } from '@prisma/client';
import { useTheme } from '@csmm/ui';
import { SUBSCRIPTION_STATES } from '../../enums';
import { Card } from './card';

export const PaymentStateCard: FC = () => {
  const [isOverdue, setOverdue] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useTheme();

  function pay() { }

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
    <Card
      bgColor={isOverdue ? theme.colors.error : theme.colors.primary}
      description={isOverdue ? 'overdue' : 'paid'}
      loading={loading}
      onClick={isOverdue ? pay : undefined}
      textColor="#fff"
      title="Payment state: "
    />
  );
};
