import { FC } from 'react';
import { styled } from '../../styled';
import { Size } from '../../styled/types';

const Container = styled.div<{ src?: string, size: Size, isCircle: boolean }>`
  border-radius: ${({ isCircle }): string => isCircle ? '50%' : '30%'};
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
      `background-color: ${theme.colors.primary};`;
  }}

  ${({ size }) => {
    switch (size) {
      case 'tiny':
        return `
          width: 1.825rem;
          height: 1.825rem;
          font-size: 1.125rem;
        `;
      case 'small':
        return `
          width: 2.5rem;
          height: 2.5rem;
          font-size: 1.5rem;
        `;
      case 'medium':
        return `
          width: 4.5rem;
          height: 4.5rem;
          font-size: 2rem;
        `;
      case 'large':
        return `
          width: 14rem;
          height: 14rem;
          font-size: 2.8rem;
        `;
      case 'huge':
        return `
          width: 20rem;
          height: 20rem;
          font-size: 3rem;
        `;
    }
  }}
`;

export interface AvatarProps {
  alt: string;
  src?: string;
  size: Size
  loading?: boolean;
  isCircle?: boolean;
}

// TODO: skeleton loading
export const Avatar: FC<AvatarProps> = ({
  size,
  alt,
  src = undefined,
  loading,
  children,
  isCircle = true
}) => {
  return (
    <Container
      aria-label={alt}
      isCircle={isCircle}
      role="img"
      size={size}
      src={src}
    >
      {children}
    </Container>
  );
};
