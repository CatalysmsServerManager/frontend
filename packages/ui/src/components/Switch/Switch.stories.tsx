import { Meta } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Switch } from '.';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
  text-align: left;

  & > div {
    padding: 2px 10px;
  }
`;

export default {
  title: 'Components/Switch',
  component: Switch,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const Default = () => (
  <>
    <h3>Default</h3>
    <h3>Disabled</h3>
    <h3>Checked by default </h3>
    <div><Switch name="switch01" /></div>
    <div><Switch disabled name="switch02" /></div>
    <div><Switch defaultChecked name="switch03" /></div>
  </>
);
