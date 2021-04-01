import { FC } from 'react';
import { styled } from 'styled';

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
      `background-color: ${theme.secondary}`;
  }}
`;

const Small = styled(Template)`
  width: 1.825rem;
  height: 1.825rem;
  font-size: .8rem;
`;
const Medium = styled(Template)`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.2rem;
`;

const Large = styled(Template)`
  width: 4rem;
  height: 4rem;
  font-size: 1.3rem;
`;

interface Name {
  firstName: string;
  lastName: string;
}

export interface AvatarProps {
  alt: string;
  src?: string;
  size: 'small' | 'medium' | 'large'
  /* Will take initial of name (first 2/3 letters)*/
  name?: Name;
  // TODO: skeleton loading
}

export const Avatar: FC<AvatarProps> = ({ size, alt, src = undefined, children }) => {
  switch (size) {
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
