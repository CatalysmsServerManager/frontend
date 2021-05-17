import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled';
import { IconButton, IconButtonProps } from 'components';

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
  glyph: 'dashboard',
  onClick: undefined,
  size: 'medium'
};

export const Sizes = () => (
  <>
    <IconButton glyph="dashboard" onClick={() => { }} size="small" />
    <IconButton glyph="dashboard" onClick={() => { }} size="medium" />
    <IconButton glyph="dashboard" onClick={() => { }} size="large" />
  </>
);
