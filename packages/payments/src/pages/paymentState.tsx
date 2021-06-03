import { FC, createRef, useEffect } from 'react';
import { useModal, SingleActionModal } from '@csmm/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

type PaymentStates = 'success' | 'failed' | 'aborted'

export const PaymentState: FC = () => {
  const { state } = useParams();

  const [ModalWrapper, open, close] = useModal();
  const ref = createRef<HTMLDivElement>();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    open();
  }, []);

  const handleClose = () => {
    close();
    navigate('/billing/dashboard');
  };

  // TODO: set correct actions
  function getModal() {
    switch (state as PaymentStates) {
      case 'success':
        return (
          <SingleActionModal
            action={() => { enqueueSnackbar('Accept button pressed.', { variant: 'success' }); }}
            actionText="Go back to dashboard"
            close={handleClose}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ref={ref}
            title="Payment successful!"
            type="success"
          />
        );
      case 'aborted':
        return (
          <SingleActionModal
            action={() => { enqueueSnackbar('Accept button pressed.', { variant: 'success' }); }}
            actionText="Go back to dashboard"
            close={handleClose}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ref={ref}
            title="Payment aborted."
            type="error"
          />
        );
      case 'failed':
        return (
          <SingleActionModal
            action={() => { enqueueSnackbar('Accept button pressed.', { variant: 'success' }); }}
            actionText="Go back to dashboard"
            close={handleClose}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ref={ref}
            title="Payment Failed."
            type="error"
          />
        );
    }
  }

  return (
    <ModalWrapper>
      {getModal()}
    </ModalWrapper>
  );
};
