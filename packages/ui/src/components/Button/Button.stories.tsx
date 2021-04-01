import { Meta } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Button } from '.';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
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

    <Button onClick={() => { }} text="white default button" white />
    <Button disabled onClick={() => { }} text="white disabled button" white />
    <Button isLoading onClick={() => { }} text="white loading button" white />

    <Button onClick={() => { }} size="small" text="small default button" />
    <Button onClick={() => { }} size="medium" text="medium default button" />
    <Button onClick={() => { }} size="large" text="large default button" />
  </>
);

export const Outline = () => (
  <>
    <Button onClick={() => { }} text="outline button" variant="outline" />
    <Button disabled onClick={() => { }} text="disabled outline button" variant="outline" />
    <Button isLoading onClick={() => { }} text="loading outline button" variant="outline" />

    <Button onClick={() => { }} text="white outline button" variant="outline" white />
    <Button disabled onClick={() => { }} text="white disabled button" variant="outline" white />
    <Button isLoading onClick={() => { }} text="white loading button" variant="outline" white />

    <Button onClick={() => { }} size="small" text="small outlined button" variant="outline" />
    <Button onClick={() => { }} size="medium" text="medium outlined button" variant="outline" />
    <Button onClick={() => { }} size="large" text="large outlined button" variant="outline" />
  </>
);

/* TODO: when icons are implemented
export const Icon = Template.bind({});
Icon.args = {
  text: 'icon button',
  icon:
}
*/
