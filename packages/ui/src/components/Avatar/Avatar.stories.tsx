import { Meta, Story } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { Avatar, AvatarProps } from 'components';
import { getInitials } from 'helpers';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
`;

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
export const Basic = Template.bind({});
Basic.args = { alt: 'Harry Potter', size: 'medium', src: 'https://avatars.githubusercontent.com/u/22315101?v=4' };

export const Sizes = () => (
  <>
    <Avatar alt="Harry Potter" size="tiny" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
    <Avatar alt="Harry Potter" size="small" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
    <Avatar alt="Harry Potter" size="medium" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
    <Avatar alt="Harry Potter" size="large" src="https://avatars.githubusercontent.com/u/22315101?v=4" />
  </>
);

export const Initials = () => (
  /* I added a double last name to show that it takes up to 2 letters */
  <>
    <Avatar alt="Harry Potter" size="tiny">{getInitials('Harry', 'Potter ')}</Avatar>
    <Avatar alt="Harry Potter" size="small">{getInitials('Albus', 'Severus Potter')}</Avatar>
    <Avatar alt="Harry Potter Vanmiet" size="medium">{getInitials('James ', 'Sirius Potter ')}</Avatar>
    <Avatar alt="Harry Potter" size="large">{getInitials('Lily', 'Luna Potter')}</Avatar>
  </>
);
