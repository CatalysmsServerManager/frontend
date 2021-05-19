import { Story, Meta } from '@storybook/react';
import { SingleActionModal } from 'modals';
import { useModal, useOutsideAlerter } from 'hooks';
import { createRef } from 'react';

export default {
  title: 'Modals/SingleAction',
  component: undefined
} as Meta;

export const Example: Story = () => {
  const [ModalWrapper, open, close] = useModal();
  const ref = createRef<HTMLDivElement>();
  useOutsideAlerter(ref, () => { close(ref); });

  return (
    <div>
      {/* @ts-ignore */}
      <ModalWrapper>
        <SingleActionModal
          action={() => { /* dummy */ }}
          actionText="Go back to dashboard"
          close={close}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ref={ref}
          title="Payment successful"
          type="error"
        />
      </ModalWrapper>
      <button onClick={open}>open modal</button>
    </div>
  );
};
