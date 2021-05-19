import { Story, Meta } from '@storybook/react';
import { ConfirmationModal } from 'modals';
import { useModal, useOutsideAlerter } from 'hooks';
import { createRef } from 'react';

export default {
  title: 'Modals/Confirmation',
  component: undefined
} as Meta;

export const Example: Story = () => {
  const [ModalWrapper, openModal, closeModal] = useModal();
  const ref = createRef<HTMLDivElement>();
  useOutsideAlerter(ref, () => closeModal(ref));

  return (
    <div ref={ref}>
      {/* @ts-ignore */}
      <ModalWrapper>
        <ConfirmationModal
          action={() => { /* dummy */ }}
          actionText="Accept"
          // @ts-ignore
          close={closeModal}
          description="This is the description of the modal."
          title="This is the title of the modal"
          type="info"
        />
      </ModalWrapper>
      <button onClick={openModal}>open modal</button>
    </div>
  );
};
