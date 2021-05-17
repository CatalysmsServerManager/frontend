import { Meta, Story } from '@storybook/react';
import styled from 'styled';
import { Divider, DividerProps } from 'components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;

  div {
    button {
      margin: 15px 0;
    }
  }
`;

export default {
  title: 'Components/Divider',
  component: Divider,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

// Default Button
export const Basic = Template.bind({});
Basic.args = {};
