import { Meta, Story } from '@storybook/react';
import { useSnackbar } from 'notistack';
import styled from 'styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default {
  title: 'Components/Snacks/Default',
  component: undefined
} as Meta;

export const Snacks: Story = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Wrapper>
      <button onClick={() => { enqueueSnackbar('Info message', { variant: 'info' }); }}>Info</button>
      <button onClick={() => { enqueueSnackbar('Success message', { variant: 'success' }); }}>Success</button>
      <button onClick={() => { enqueueSnackbar('Warning message', { variant: 'warning' }); }}>Warning</button>
      <button onClick={() => { enqueueSnackbar('Error message', { variant: 'error' }); }}>Error</button>
    </Wrapper>
  );
};
