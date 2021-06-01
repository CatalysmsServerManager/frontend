import { Story, Meta } from '@storybook/react';
import { ConfirmationModal } from 'modals';
import { useModal, useOutsideAlerter } from 'hooks';
import { createRef } from 'react';
import { useSnackbar } from 'notistack';

export default {
  title: 'Modals/Confirmation',
  component: undefined
} as Meta;

export const Example: Story = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [Wrapper, open, close] = useModal();
  const ref = createRef<HTMLDivElement>();
  // @ts-ignore
  useOutsideAlerter(ref, () => close());

  return (
    <div>
      {/* @ts-ignore */}
      <Wrapper>
        <ConfirmationModal
          action={() => { enqueueSnackbar('The message has been accepted', { variant: 'success' }); }}
          actionText="Accept"
          // @ts-ignore
          close={close}
          description="This is the description of the modal."
          ref={ref}
          title="This is the title of the modal"
          type="info"
        />
      </Wrapper>
      <button onClick={open}>open modal</button>
    </div>
  );
};
