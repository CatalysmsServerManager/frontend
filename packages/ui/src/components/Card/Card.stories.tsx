import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled';
import { Card, CardProps, Empty } from 'components';

const WrapperDecorator = styled.div`
  padding: 5rem;
  border-radius: 1rem;
  background-color: ${({ theme }): string => theme.colors.background};
  span {
    font-weight: 900;
  }
`;

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [story => <WrapperDecorator>{story()}</WrapperDecorator>],
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>example card</Card>;

// Default Button
export const Basic = Template.bind({});
Basic.args = { size: 'medium' };

export const Sizes = () => (
  <>
    <Card size="small"><Empty description="Small Card" /></Card>
    <Card size="medium"><Empty description="Medium Card" /></Card>
    <Card size="large"><Empty description="Large Card" /></Card>
  </>
);
