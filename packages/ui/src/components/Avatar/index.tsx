import { FC } from 'react';
import styled from 'styled';

const Template = styled.div<{ src?: string }>`
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  ${({ src, theme }): string => {
    return src
      ?
      `background-image: url(${src})`
      :
      `background-color: ${theme.colors.secondary}`;
  }}
`;

const Tiny = styled(Template)`
  width: 1.2rem;
  height: 1.2rem;
  font-size: .5rem;
`;

const Small = styled(Template)`
  width: 1.825rem;
  height: 1.825rem;
  font-size: .725rem;
`;
const Medium = styled(Template)`
  width: 2.75rem;
  height: 2.75rem;
  font-size: 1.125rem;
`;

const Large = styled(Template)`
  width: 4rem;
  height: 4rem;
  font-size: 1.3rem;
`;

export interface AvatarProps {
  alt: string;
  src?: string;
  size: 'tiny' | 'small' | 'medium' | 'large'
  // TODO: skeleton loading
}

export const Avatar: FC<AvatarProps> = ({ size, alt, src = undefined, children }) => {
  switch (size) {
    case 'tiny':
      return (
        <Tiny aria-label={alt} role="img" src={src}>{children}</Tiny>
      );
    case 'small':
      return (
        <Small aria-label={alt} role="img" src={src}>{children}</Small>
      );
    case 'medium':
      return (
        <Medium aria-label={alt} role="img" src={src}>{children}</Medium>
      );
    case 'large':
      return (
        <Large aria-label={alt} role="img" src={src}>{children}</Large>
      );
  };
};
