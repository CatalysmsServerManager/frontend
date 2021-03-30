import { Meta } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Button } from '.';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;

  button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const Default = () => (
  <>
    <Button onClick={() => { }} text="default button" />
    <Button disabled onClick={() => { }} text="disabled button" />
    <Button isLoading onClick={() => { }} text="loading button" />
  </>
);

export const Sizes = () => (
  <>
    <Button onClick={() => { }} size="small" text="small button" />
    <Button onClick={() => { }} size="medium" text="medium button" />
    <Button onClick={() => { }} size="large" text="large button" />
  </>
);

/* TODO: when icons are implemented
export const Icon = Template.bind({});
Icon.args = {
  text: 'icon button',
  icon:
}
*/
