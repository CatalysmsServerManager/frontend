import { Meta, Story } from '@storybook/react';
import { styled } from 'styled';
import { Switch, SwitchProps } from 'components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: .5rem 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  text-align: center;

  & > div {
    margin: 0 auto;
    padding: 2px 10px;
  }
`;

export default {
  title: 'Components/Form/Switch',
  component: Switch,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<SwitchProps> = (args) => <div><Switch {...args} /></div>;

// Default Button
export const Basic = Template.bind({});
Basic.args = { name: 'switch0' };

export const Examples = () => (
  <>
    <h3>Default</h3>
    <h3>Disabled</h3>
    <h3>Checked by default </h3>
    <div><Switch name="switch01" /></div>
    <div><Switch disabled name="switch02" /></div>
    <div><Switch defaultChecked name="switch03" /></div>
  </>
);
