import { Meta } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Avatar, AvatarGroup } from 'components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
`;

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const Default = () => (
  <AvatarGroup>
    <Avatar alt="Harry Potter" size="medium" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
    <Avatar alt="Ron Weasley" size="medium" src="https://avatars.githubusercontent.com/u/35073890?v=4" />
    <Avatar alt="Hermione Granger" size="medium" src="https://avatars.githubusercontent.com/u/110087?v=4" />
    <Avatar alt="Tom Riddle" size="medium" src="https://avatars.githubusercontent.com/u/110087?v=4" />
  </AvatarGroup>
);
