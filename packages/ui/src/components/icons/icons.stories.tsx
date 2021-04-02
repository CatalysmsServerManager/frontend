import { Meta, Story } from '@storybook/react/types-6-0';
import { styled } from 'styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeType } from 'styled/theme';
import { Icon, IconProps, glyphs } from 'components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-gap: 2rem;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  
  svg {
    cursor: pointer;
  }
`;

export default {
  title: 'Components/Icons',
  component: Icon,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

// Default Button
export const Basic = Template.bind({});
Basic.args = {
  glyph: 'dashboard',
  size: 24
};

export const Overview = () => {
  const themeContext = useContext<ThemeType>(ThemeContext);
  return (
    <>{glyphs.map((glyph) => <Icon fill={themeContext.colors.tertiary} glyph={glyph} />)}</>
  );
};
