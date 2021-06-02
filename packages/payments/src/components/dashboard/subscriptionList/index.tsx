import { FC, useState, useEffect, useMemo } from 'react';
import { Empty, styled, Loading } from '@csmm/ui';
import { httpService } from '../../../services';
import { SubscriptionItem } from './subscriptionItem';
import { ListWrapper } from './ListWrapper';
import { ISubscriptionWithProduct, SubscriptionContext } from '../../../context';
import { motion } from 'framer-motion';
import SimpleBar from 'simplebar-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'spring', bounce: 0.5, staggerChildren: 0.2 }
  }
};

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px;
  h4 {
    font-size: 1rem;
    width: calc(100%/4);
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};

    &.center {
      text-align: center;
    }
  }
`;

export const SubscriptionList: FC = () => {
  const [subscriptions, setSubscriptions] = useState<ISubscriptionWithProduct[]>();
  const providerSubscriptions = useMemo(() => ({ subscriptions, setSubscriptions }), [subscriptions, setSubscriptions]);
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
        <h4>Payment state</h4>
        <h4>Options</h4>
      </Header>
      <SimpleBar style={{ maxHeight: 540 }} >
        <motion.ul animate="show" initial="hidden" variants={container}>
          <SubscriptionContext.Provider value={providerSubscriptions}>
            {subscriptions.map((subscription) => <SubscriptionItem {...subscription} key={subscription.id} />)}
          </SubscriptionContext.Provider>
        </motion.ul>
      </SimpleBar>
    </ListWrapper>
  );
};
