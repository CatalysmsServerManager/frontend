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

    <Button onClick={() => { }} size="small" text="small button" />
    <Button onClick={() => { }} size="medium" text="medium button" />
    <Button onClick={() => { }} size="large" text="large button" />
  </>
);

export const Outline = () => (
  <>
    <Button onClick={() => { }} outline text="outline button" />
    <Button disabled onClick={() => { }} outline text="disabled outline button" />
    <Button isLoading onClick={() => { }} outline text="loading outline button" />

    <Button onClick={() => { }} outline text="white outline button" white />
    <Button disabled onClick={() => { }} outline text="white disabled button" white />
    <Button isLoading onClick={() => { }} outline text="white loading button" white />

    <Button onClick={() => { }} outline size="small" text="small button" />
    <Button onClick={() => { }} outline size="medium" text="medium button" />
    <Button onClick={() => { }} outline size="large" text="large button" />
  </>
);

/* TODO: when icons are implemented
export const Icon = Template.bind({});
Icon.args = {
  text: 'icon button',
  icon:
}
*/
