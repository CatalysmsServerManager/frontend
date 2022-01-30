import { Meta, Story } from '@storybook/react';
import { DrawerSnack, Button } from '../../..';
import { useSnackbar } from 'notistack';

import { styled } from 'styled';
import { AiFillCheckCircle as CheckMarkIcon } from 'react-icons/ai';

const CustomContent = styled.div`
  h4 {
    font-size: 1.2rem;
  }
  p {
    display: flex;
    align-items: center;
    svg {
      margin-right: .5rem;
    }
  }
`;

export default {
  title: 'Components/Snacks/DrawerSnack',
  component: undefined,
} as Meta;

export const Downloads: Story = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnack = () => {
    enqueueSnackbar('Report Complete', {
      autoHideDuration: 20000, // 20s
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      content: (key, message) => (
        <DrawerSnack
          id={key}
          message={message}>
          <CustomContent>
            <h4>Pdf Ready</h4>
            <p><CheckMarkIcon /> Download now</p>
          </CustomContent>
        </DrawerSnack>
      )
    });
  };

  return (
    <Button
      onClick={() => showSnack()}
      text="Show snack"
    />
  );
};
