import { Meta, Story } from '@storybook/react';
import styled from 'styled';
import { IconButton, IconButtonProps } from 'components';
import { AiFillAccountBook as Icon } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
`;

export default {
  title: 'Components/IconButton',
  component: IconButton,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

// Default Button
export const Basic = Template.bind({});
Basic.args = {
  onClick: undefined,
  size: 'medium'
};

export const Sizes = () => (
  <>
    <IconButton icon={<Icon />} onClick={() => { }} size="tiny" />
    <IconButton icon={<Icon />} onClick={() => { }} size="small" />
    <IconButton icon={<Icon size={18} />} onClick={() => { }} size="medium" />
    <IconButton icon={<Icon size={24} />} onClick={() => { }} size="large" />
    <IconButton icon={<Icon size={32} />} onClick={() => { }} size="huge" />
  </>
);
