import { FC, useState, useEffect, useMemo } from 'react';
import { Header, animateItems } from './style';
import { Empty, Loading } from '@csmm/ui';
import { httpService } from 'services';
import { SubscriptionItem } from '../SubscriptionItem';
import { ListWrapper } from 'components';
import { SubscriptionWithProduct, SubscriptionContext, ISubscriptionContext } from 'context';
import { motion } from 'framer-motion';
import SimpleBar from 'simplebar-react';

export const SubscriptionList: FC = () => {
  const [subscriptions, setSubscriptions] = useState<SubscriptionWithProduct[]>([]);
  const providerSubscriptions = useMemo<ISubscriptionContext>(() => ({ subscriptions, setSubscriptions }), [subscriptions, setSubscriptions]);
  const [loading, setLoading] = useState(true);

  async function getSubscriptions() {
    const response = await httpService.get('/subscription');
    if (response.ok) {
      const json = await response.json();
      setSubscriptions(json);
      setLoading(false);
      return;
    }
    setSubscriptions([]);
  }

  useEffect(() => {
    getSubscriptions();
  }, []);

  if (loading || !subscriptions) {
    return (
      <ListWrapper center title="Your subscriptions">
        <Loading />
      </ListWrapper>
    );
  }

  if (!subscriptions.length) {
    return (
      <ListWrapper center title="Your subscriptions" >
        <Empty description="You have no subscriptions." />
      </ListWrapper>
    );
  }

  return (
    <ListWrapper title="Your subscriptions">
      <Header>
        <h4>Product name</h4>
        <h4>Next Due date</h4>
        <h4>Subscription state</h4>
        <h4>Options</h4>
      </Header>
      <SimpleBar style={{ maxHeight: 540 }} >
        <motion.ul animate="show" initial="hidden" variants={animateItems}>
          <SubscriptionContext.Provider value={providerSubscriptions}>
            {subscriptions.map((subscription) => <SubscriptionItem {...subscription} key={subscription.id} />)}
          </SubscriptionContext.Provider>
        </motion.ul>
      </SimpleBar>
    </ListWrapper>
  );
};
