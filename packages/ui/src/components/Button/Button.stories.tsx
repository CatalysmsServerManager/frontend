import { Meta, Story } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Button, ButtonProps, Icon as I } from 'components';

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
  title: 'Components/Button',
  component: Button,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Default Button
export const Basic = Template.bind({});
Basic.args = {
  text: 'Basic Button',
  size: 'medium',
  type: 'button',
  variant: 'default'
};

export const Examples = () => (
  <>
    <Button onClick={() => { }} text="White Button" white />
    <Button icon={<I glyph="dashboard" />} onClick={() => { }} text="Icon Button" />
    <Button disabled onClick={() => { }} text="Disabled Button" />
    <Button isLoading onClick={() => { }} text="Loading Button" />

    {/* Outline */}
    <Button onClick={() => { }} text="Outlined Button" variant="outline" />
    <Button icon={<I glyph="dashboard" />} onClick={() => { }} text="Icon Button" variant="outline" />
    <Button disabled onClick={() => { }} text="Disabled Button" variant="outline" />
    <Button isLoading onClick={() => { }} text="Loading Button" variant="outline" />
  </>
);

/* ===================================
    DIFFERENT SIZED DEFAULT BUTTONS
  ====================================
*/
export const Sizes = () => (
  <div>
    <Button onClick={() => { }} size="small" text="Small Button" />
    <Button onClick={() => { }} size="medium" text="Medium Button" />
    <Button onClick={() => { }} size="large" text="Large Button" />
  </div>
);
