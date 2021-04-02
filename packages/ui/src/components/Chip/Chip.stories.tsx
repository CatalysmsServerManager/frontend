import { Meta, Story } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Avatar, Chip, ChipProps } from 'components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  text-align: left;
`;

export default {
  title: 'Components/Chip',
  component: Chip,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  label: 'basic',
  color: 'default',
  variant: 'default',
  onDelete: undefined,
  onClick: undefined
};

export const Examples = () => (
  <>
    <Chip label="Default Chip" />
    <Chip color="primary" label="Primary Chip" />
    <Chip color="secondary" label="Secondary Chip" />
    <Chip color="gradient" label="Gradient Chip" />

    <Chip label="Outlined Chip" variant="outline" />
    <Chip color="primary" label="Primary Chip" variant="outline" />
    <Chip color="secondary" label="Secondary Chip" variant="outline" />
    <Chip color="gradient" label="Gradient Chip" variant="outline" />

    <Chip label="Clickable Chip" onClick={() => { }} />
    <Chip label="Deletable Chip" onDelete={() => { }} />
    <Chip avatar={<Avatar alt="avatar" size="small">NC</Avatar>} label="Avatar Chip" />

  </>
);
