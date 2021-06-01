import { FC } from 'react';
import styled from 'styled';
import { Size } from 'styled/types';

const Container = styled.div<{ src?: string, size: Size }>`
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
      `background-image: url(${src});`
      :
      `background-color: ${theme.colors.secondary};`;
  }}
  
  ${({ size }) => {
    switch (size) {
      case 'tiny':
        return `
          width: 1.2rem;
          height: 1.2rem;
          font-size: .5rem;
        `;
      case 'small':
        return `
          width: 1.825rem;
          height: 1.825rem;
          font-size: .725rem;
        `;
      case 'medium':
        return `
          width: 2.75rem;
          height: 2.75rem;
          font-size: 1.125rem;
        `;
      case 'large':
        return `
          width: 4rem;
          height: 4rem;
          font-size: 1.2rem;
        `;
      case 'huge':
        return `
          width: 5rem;
          height: 5rem;
          font-size: 1.5rem;
        `;
    }
  }}
`;

export interface AvatarProps {
  alt: string;
  src?: string;
  size: Size
  loading?: boolean;
}

// TODO: skeleton loading
export const Avatar: FC<AvatarProps> = ({ size, alt, src = undefined, loading, children }) => {
  return (
    <Container
      aria-label={alt}
      role="img"
      size={size}
      src={src}
    >
      {children}
    </Container>
  );
};
