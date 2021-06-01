import { createRef, forwardRef, useContext } from 'react';
import { Container, StyledPlus } from './style';
import { Link, AlertTriangle, ShoppingCart, Undo } from '../../../../icons';
import { httpService } from '../../../../services';
import { useModal, useOutsideAlerter } from '../../../../hooks';
import { ConfirmationModal } from '../../../modals';
import { useSnackbar } from 'notistack';
import { SubscriptionContext } from '../../../../context';
import { SUBSCRIPTION_STATES } from '../../../../enums';
import { setRedirect } from 'helpers';
import { useLocation } from 'react-router-dom';

interface IProps {
  pterodactylId: number | null;
  subscriptionId: string;
  subscriptionState: string;
}

export const SubscriptionItemSettings = forwardRef<HTMLDivElement, IProps>(({ pterodactylId, subscriptionId, subscriptionState }, ref) => {
  const [CancelModalWrapper, openCancelModal, closeCancelModal] = useModal();
  const [PayModalWrapper, openPayModal, closePayModal] = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const { setSubscriptions, subscriptions } = useContext(SubscriptionContext);
  const location = useLocation();

  async function pay() {
    enqueueSnackbar('You are being redirected to the payment platform.', { variant: 'info' });
    const response = await httpService.post('/subscription/pay', { subscriptionId });
    if (response.ok) {
      const json = await response.json();
      setRedirect(location.pathname);
      window.location.href = json.url;
      return;
    }
    enqueueSnackbar('Something went wrong', { variant: 'error' });
  }

  async function cancel() {
    // THIS IS NOT SET CORRECTLY
    const response = await httpService.post('/subscription/cancel', { subscriptionId });
    if (response.ok) {
      const newSubscriptionList = subscriptions?.map((subscription) => {
        if (subscription.id === subscriptionId) subscription.state = SUBSCRIPTION_STATES.CANCELLED;
        return subscription;
      });

      if (newSubscriptionList?.length && setSubscriptions) {
        // TODO: check this again
        setSubscriptions(newSubscriptionList);
      }
      enqueueSnackbar('Subscription cancelled.', { variant: 'info' });
      return;
    }
    enqueueSnackbar('Something went wrong! We are aware and are looking for a solution. 🤓', { variant: 'error' });
  }

  async function reverseCancel() {
    // TODO: reverse cancel action (@niekcandaele)
    const response = await httpService.post('/subscription/cancel/reverse', { subscriptionId });
    if (response.ok) {
      enqueueSnackbar('Subscription cancel has been reversed.', { variant: 'info' });
      return;
    }
    enqueueSnackbar('Something went wrong! We are aware and are looking for a solution. 🤓', { variant: 'error' });
  }

  const wrapperRef = createRef<HTMLDivElement>();
  useOutsideAlerter(wrapperRef, closeCancelModal);
  useOutsideAlerter(wrapperRef, closePayModal);

  return (
    <Container ref={ref}>
      <ul>
        {
          subscriptionState === SUBSCRIPTION_STATES.OVERDUE || subscriptionState === SUBSCRIPTION_STATES.ACTIVE
            ? <li onClick={openPayModal}><ShoppingCart fill="#fff" pointer /><span>Pay now</span></li>
            : null
        }
        {
          /* Shows cancel button when in active or overdue state. If in cancelled state, the cancel can be reversed.*/
          subscriptionState === SUBSCRIPTION_STATES.ACTIVE || subscriptionState === SUBSCRIPTION_STATES.OVERDUE
            ? <li onClick={openCancelModal}><StyledPlus fill="#fff" pointer /><span>Cancel subscription</span></li>
            : subscriptionState === SUBSCRIPTION_STATES.CANCELLED
              ? <li onClick={reverseCancel}><Undo fill="#fff" pointer /><span>Reverse cancellation</span></li>
              : null
        }
        {
          /* Only shows this option when pterodactylId is defined*/
          pterodactylId
            ?
            <li>
              <a href={`https://panel.csmm.fun/server/${pterodactylId}`} rel="noopener noreferrer" target="_blank"><Link fill="#fff" pointer />
                <span>Go to panel</span>
              </a >
            </li >
            : null
        }
      </ul >

      { /* Cancel confirmation Modal */}
      < CancelModalWrapper >
        <ConfirmationModal
          action={cancel}
          actionText="Confirm"
          close={closeCancelModal}
          description="Are you sure you want to cancel this subscription? This will result in shutting down your server and losing your data when the next due date is reached."
          icon={AlertTriangle}
          ref={wrapperRef}
          title="Cancel subscription"
          type="danger"
        />
      </CancelModalWrapper >

      { /* Buy confirmation Modal */}
      < PayModalWrapper >
        <ConfirmationModal
          action={pay}
          actionText="Pay now"
          close={closePayModal}
          description="Are you sure you want to pay for this subscription? By clicking pay now you will be redirected to the payment provider."
          icon={AlertTriangle}
          ref={wrapperRef}
          title="Pay for current subscription"
          type="info"
        />
      </PayModalWrapper >
    </Container >
  );
});
