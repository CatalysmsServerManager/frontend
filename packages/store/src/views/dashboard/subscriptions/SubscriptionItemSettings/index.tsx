import { createRef, forwardRef, useContext } from 'react';
import { Container } from './style';
import { httpService } from 'services';
import { useModal, useOutsideAlerter, ConfirmationModal } from '@csmm/ui';
import { useSnackbar } from 'notistack';
import { SubscriptionContext } from 'context';
import { SUBSCRIPTION_STATES } from 'enums';
import { setRedirect } from 'helpers';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  AiOutlinePaperClip as LinkIcon,
  AiOutlineAlert as AlertTriangleIcon,
  AiOutlineShoppingCart as ShoppingCartIcon,
  AiOutlineUndo as UndoIcon,
  AiOutlineRocket as DeployIcon,
  AiOutlineClose as CloseIcon
} from 'react-icons/ai';

interface SubscriptionItemSettingsProps {
  pterodactylId: number | null;
  subscriptionId: string;
  subscriptionState: string;
}

export const SubscriptionItemSettings = forwardRef<HTMLDivElement, SubscriptionItemSettingsProps>(({ pterodactylId, subscriptionId, subscriptionState }, ref) => {
  const [CancelModalWrapper, openCancelModal, closeCancelModal] = useModal();
  const [PayModalWrapper, openPayModal, closePayModal] = useModal();
  const [ReverseModalWrapper, openReverseModal, closeReverseModal] = useModal();

  const { enqueueSnackbar } = useSnackbar();
  const { setSubscriptions, subscriptions } = useContext(SubscriptionContext);
  const location = useLocation();
  const navigate = useNavigate();

  async function pay() {
    enqueueSnackbar('You are being redirected to the payment platform.', { variant: 'info' });
    const response = await httpService.post('/subscription/pay', { subscriptionId });
    if (!response.ok) {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
      return;
    }
    const json = await response.json();
    setRedirect(location.pathname);
    window.location.href = json.url;
  }
  function deploy() { navigate(`/deploy/${subscriptionId}`); }

  async function cancel() {
    const response = await httpService.post('/subscription/state', { subscriptionId, state: SUBSCRIPTION_STATES.CANCELLED });
    if (!response.ok) {
      enqueueSnackbar('Something went wrong! We are aware and are looking for a solution. 🤓', { variant: 'error' });
      return;
    }
    const newSubscriptionList = subscriptions.map((subscription) => {
      if (subscription.id === subscriptionId) subscription.state = SUBSCRIPTION_STATES.CANCELLED;
      return subscription;
    });

    if (newSubscriptionList.length) {
      setSubscriptions(newSubscriptionList);
    }
    enqueueSnackbar('Subscription cancelled.', { variant: 'info' });
    return;
  }

  async function reverseCancel() {
    const response = await httpService.post('/subscription/state', { subscriptionId, state: SUBSCRIPTION_STATES.ACTIVE });
    if (!response.ok) {
      enqueueSnackbar('Something went wrong! We are aware and are looking for a solution. 🤓', { variant: 'error' });
      return;
    }
    const newSubscriptionList = subscriptions.map((subscription) => {
      if (subscription.id === subscriptionId) subscription.state = SUBSCRIPTION_STATES.ACTIVE;
      return subscription;
    });
    if (newSubscriptionList.length) { setSubscriptions(newSubscriptionList); }
    enqueueSnackbar('Subscription cancel has successfully been reversed.', { variant: 'success' });
  }

  const wrapperRef = createRef<HTMLDivElement>();
  useOutsideAlerter(wrapperRef, closeCancelModal);
  useOutsideAlerter(wrapperRef, closePayModal);

  function renderSwitch() {
    switch (subscriptionState) {
      case SUBSCRIPTION_STATES.OVERDUE:
      case SUBSCRIPTION_STATES.ACTIVE:
        return (
          <>
            <li onClick={openPayModal}><ShoppingCartIcon size={24} /><span>Pay now</span></li>
            <li onClick={openCancelModal}><CloseIcon size={24} /><span>Cancel subscription</span></li>
          </>
        );
      case SUBSCRIPTION_STATES.CANCELLED:
        return <li onClick={openReverseModal}><UndoIcon size={24} /><span>Reverse cancellation</span></li>;
      case SUBSCRIPTION_STATES.DEPLOY:
        return <li onClick={deploy}><DeployIcon size={24} /><span>Deploy now</span></li>;
    }
  }

  return (
    <Container ref={ref}>
      <ul>
        {renderSwitch()}
        {
          /* Only shows this option when pterodactylId is defined*/
          pterodactylId
            ?
            <li>
              <a href={`https://panel.csmm.fun/server/${pterodactylId}`} rel="noopener noreferrer" target="_blank">
                <LinkIcon size={24} />
                <span>Go to panel</span>
              </a>
            </li >
            : null
        }
      </ul>

      { /* Cancel confirmation Modal */}
      < CancelModalWrapper >
        <ConfirmationModal
          action={cancel}
          actionText="Confirm"
          close={closeCancelModal}
          description="Are you sure you want to cancel this subscription? This will result in shutting down your server and losing your data when the next due date is reached."
          icon={AlertTriangleIcon}
          ref={wrapperRef}
          title="Cancel subscription"
          type="error"
        />
      </CancelModalWrapper >

      { /* Buy confirmation Modal */}
      <PayModalWrapper>
        <ConfirmationModal
          action={pay}
          actionText="Pay now"
          close={closePayModal}
          description="Are you sure you want to pay for this subscription? By clicking pay now you will be redirected to the payment provider."
          icon={AlertTriangleIcon}
          ref={wrapperRef}
          title="Pay for current subscription"
          type="info"
        />
      </PayModalWrapper >

      { /* Reverse cancellation Modal */}
      <ReverseModalWrapper>
        <ConfirmationModal
          action={reverseCancel}
          actionText="Reverse cancel"
          close={closeReverseModal}
          description="Are you sure you want to reverse the cancellation of your subscription? This will result in a new payment when your new due date has been reached."
          icon={AlertTriangleIcon}
          ref={wrapperRef}
          title="Reverse subscription cancel"
          type="error"
        />
      </ReverseModalWrapper>
    </Container >
  );
});
