import { Meta, Story } from '@storybook/react';
import styled from 'styled';
import { Spinner } from 'components';

const WrapperDecorator = styled.div`
  padding: 5rem;
  border-radius: 1rem;
  background-color: ${({ theme }): string => theme.colors.background};
  span {
    font-weight: 900;
  }
`;

export default {
  title: 'Components/Spinner',
  component: Spinner,
  decorators: [story => <WrapperDecorator>{story()}</WrapperDecorator>],
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;
export const Basic = Template.bind({});
Basic.args = {};
