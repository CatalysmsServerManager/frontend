import { FC, useState, useContext, useEffect } from 'react';
import { httpService } from '../../services';
import { Subscription } from '@prisma/client';
import { SUBSCRIPTION_STATES } from '../../enums';
import { ThemeContext } from 'styled-components';
import { ThemeType } from '../../constants/theme';
import { Card } from './card';

export const PaymentStateCard: FC = () => {
  const [isOverdue, setOverdue] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const themeContext = useContext<ThemeType>(ThemeContext);

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
      bgColor={isOverdue ? themeContext.error : themeContext.p}
      description={isOverdue ? 'overdue' : 'paid'}
      loading={loading}
      onClick={isOverdue ? pay : undefined}
      textColor='#fff'
      title='Payment state: '
    />
  );
};
