import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>dit is een knop</Button>;
export const Dis = Template.bind({});
Dis.args = {
  active: true
};
