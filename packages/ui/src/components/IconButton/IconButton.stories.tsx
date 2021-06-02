import { Meta, Story } from '@storybook/react';
import { styled } from '../../styled';
import { IconButton, IconButtonProps } from '.';
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
export const Default = Template.bind({});
Default.args = {
  onClick: undefined,
  size: 'medium',
  icon: Icon
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
