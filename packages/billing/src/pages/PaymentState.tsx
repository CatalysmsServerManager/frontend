import { FC, createRef, useEffect, useState } from 'react';
import { useModal, styled, SingleActionModal, Loading } from '@csmm/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { httpService } from 'services';
import { Subscription } from '.prisma/client';

type PaymentStates = 'success' | 'failed';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }): string => theme.colors.primary};
`;

export const PaymentState: FC = () => {
  const { subscriptionId } = useParams();
  const [state, setState] = useState<PaymentStates>();
  const [loading, setLoading] = useState<boolean>(true);
  const [ModalWrapper, open, close] = useModal();
  const ref = createRef<HTMLDivElement>();
  const navigate = useNavigate();

  async function getPaymentState() {
    const response = await httpService.get('/subscription');
    if (!response.ok) {
      setState('failed');
      setLoading(false);
      open();
      return;
    }

    const subscriptions = await response.json() as Subscription[];
    if (subscriptions.find(({ id }) => (id) === subscriptionId)) {
      setState('success');
    } else {
      setState('failed');
    }
    setLoading(false);
    open();
  }

  useEffect(() => {
    getPaymentState();
  }, []);

  const handleClose = () => {
    close();
    navigate('/billing/dashboard');
  };

  function getModal() {
    switch (state) {
      case 'success':
        return (
          <SingleActionModal
            action={() => { navigate('/billing/dashboard'); }}
            actionText="Go back to dashboard"
            close={handleClose}
            description="Your payment has been received. There should be a large deploy button waiting for you on the dashboard."
            ref={ref}
            title="Payment successful!"
            type="success"
          />
        );
      case 'failed':
        return (
          <SingleActionModal
            action={() => { navigate('/billing/dashboard'); }}
            actionText="Go back to dashboard"
            close={handleClose}
            description="Something went wrong while processing your payment. Please try again later."
            ref={ref}
            title="Payment Failed."
            type="error"
          />
        );
    }
  }

  if (loading) {
    return <Container><Loading fill="#fff" /></Container>;
  }

  return (
    <ModalWrapper>
      {getModal()}
    </ModalWrapper>
  );
};
