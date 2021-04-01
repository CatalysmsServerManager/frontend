import { Meta } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Avatar } from '.';
import { getInitials } from 'helpers';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
`;

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const Sizes = () => (
  <>
    <Avatar alt="Harry Potter" size="small" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
    <Avatar alt="Harry Potter" size="medium" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
    <Avatar alt="Harry Potter" size="large" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
  </>
);

export const Initials = () => (
  <>
    <Avatar alt="Harry Potter" size="small">{getInitials('Harry', 'Potter')}</Avatar>
    <Avatar alt="Harry Potter Vanmiet" size="medium">{getInitials('Harry', 'Potter Vanmiet')}</Avatar>
    <Avatar alt="Harry Potter" size="large">{getInitials('Harry', 'Potter')}</Avatar>
  </>
);
