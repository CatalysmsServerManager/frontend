import { Meta } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Avatar, Chip } from 'components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
  text-align: left;
`;

export default {
  title: 'Components/Chip',
  component: Chip,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const Default = () => (
  <>
    <Chip label="Default Chip" />
    <Chip disabled label="Disabled Chip" />

    <Chip label="Clickable Chip" onClick={() => { }} />
    <Chip label="Deletable Chip" onDelete={() => { }} />

    <Chip avatar={<Avatar alt="avatar" size="small">NC</Avatar>} label="Avatar Chip" />

    <Chip color="primary" label="Primary Chip" />
    <Chip color="secondary" label="Secondary Chip" />
    <Chip color="gradient" label="Gradient Chip" />

  </>
);

export const Outline = () => (
  <>
    <Chip label="Outlined Chip" variant="outline" />
    <Chip disabled label="Outlined Disabled Chip" variant="outline" />

    <Chip label="Clickable Outlined Chip" onClick={() => { }} />
    <Chip label="Deletable Outlined Chip" onDelete={() => { }} />

    <Chip color="primary" label="Primary Outlined Chip" variant="outline" />
    <Chip color="secondary" label="Secondary Outlined Chip" variant="outline" />
    <Chip color="gradient" label="Gradient Outlined Chip" variant="outline" />
  </>
);
