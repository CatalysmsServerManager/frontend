import { FC } from 'react';
import { styled } from 'styled';

const Template = styled.div<{ gradient: boolean }>`
  background: ${({ theme, gradient }) => gradient ? theme.gradient : 'white'};
  padding: 1rem 1.1rem;
  border-radius: .6rem;
  margin: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme, gradient }) => gradient ? 'white' : theme.text};

  & > h1, & > h2,& > h3, & > h4, & > h5, & > h6,& >p , & > div, & > button, & > span {
    color: ${({ theme, gradient }) => gradient ? 'white' : theme.text};
  }
`;

const Small = styled(Template)``;
const Medium = styled(Template)``;
const Large = styled(Template)`
  min-height: 250px;
  padding: 2rem;
`;

interface CardProps {
  gradient?: boolean;
  size?: 'small' | 'medium' | 'large';
}
export const Card: FC<CardProps> = ({ children, gradient = false, size = 'medium' }) => {
  switch (size) {
    case 'small':
      return (
        <Small gradient={gradient}>{children}</Small>
      );
    case 'medium':
      return (
        <Medium gradient={gradient}>{children}</Medium>
      );
    case 'large':
      return (
        <Large gradient={gradient}>{children}</Large>
      );
  }
};
