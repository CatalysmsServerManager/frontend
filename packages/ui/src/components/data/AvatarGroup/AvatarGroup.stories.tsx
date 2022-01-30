import { Meta } from '@storybook/react';
import { styled } from '../../../styled';
import { Avatar, AvatarGroup } from '..';

import placeholder01 from 'images/placeholder-01.jpeg';
import placeholder02 from 'images/placeholder-02.jpeg';
import placeholder03 from 'images/placeholder-03.jpeg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
`;

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

export const MoreThanMax = () => (
  <AvatarGroup>
    <Avatar alt="Harry Potter" size="medium" src={placeholder01} />
    <Avatar alt="Ron Weasley" size="medium" src={placeholder02} />
    <Avatar alt="Hermione Granger" size="medium" src={placeholder03} />
    <Avatar alt="Tom Riddle" size="medium" src={placeholder03} />
    <Avatar alt="Tom Riddle" size="medium" src={placeholder03} />
  </AvatarGroup>
);

export const LessThanMax = () => (
  <AvatarGroup max={5}>
    <Avatar alt="Harry Potter" size="medium" src={placeholder01} />
    <Avatar alt="Ron Weasley" size="medium" src={placeholder02} />
    <Avatar alt="Hermione Granger" size="medium" src={placeholder03} />
    <Avatar alt="Tom Riddle" size="medium" src={placeholder02} />
  </AvatarGroup>
);
