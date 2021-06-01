import { Story, Meta } from '@storybook/react';
import { SingleActionModal } from 'modals';
import { useModal, useOutsideAlerter } from 'hooks';
import { createRef } from 'react';
import { useSnackbar } from 'notistack';

export default {
  title: 'Modals/SingleAction',
  component: undefined
} as Meta;

///////////////
// SUCCESS
///////////////
export const Success: Story = () => {
  const [ModalWrapper, open, close] = useModal();
  const ref = createRef<HTMLDivElement>();
  // @ts-ignore
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div>
      {/* @ts-ignore */}
      <ModalWrapper>
        <SingleActionModal
          action={() => { enqueueSnackbar('Accept button pressed.', { variant: 'success' }); }}
          actionText="Go back to dashboard"
          close={close}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ref={ref}
          title="Payment successful!"
          type="success"
        />
      </ModalWrapper>
      <button onClick={open}>Open Success Modal</button>
    </div>
  );
};

///////////////
// ERROR
///////////////
export const Error: Story = () => {
  const [ModalWrapper, open, close] = useModal();

  return (
    <div>
      {/* @ts-ignore */}
      <ModalWrapper>
        <SingleActionModal
          action={() => { /* dummy */ }}
          actionText="Go back to dashboard"
          close={close}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Payment failed!"
          type="error"
        />
      </ModalWrapper>
      <button onClick={open}>Open Error Modal</button>
    </div>
  );
};
