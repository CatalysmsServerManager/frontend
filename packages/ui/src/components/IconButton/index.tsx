import { FC, ReactNode } from 'react';
import styled from 'styled';
import { Size } from 'styled/types';

const Container = styled.button<{ outline: boolean, size: Size }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, outline }) => outline ? 'transparent' : theme.gradient.primary};
  border-radius: 50%;
  border: 3px solid ${({ theme, outline }) => outline ? theme.colors.primary : 'transparent'};
  background-clip: padding-box;
  cursor: pointer;
  box-shadow: ${({ theme }): string => theme.colors.shadow};
  align-items: center;
;
  svg {
    cursor: pointer;
    path {
      fill: ${({ theme, outline }) => outline ? theme.colors.primary : 'white'}!important;
      stroke: ${({ theme, outline }) => outline ? theme.colors.primary : 'white'}!important;
    }
  }

  ${({ size }) => {
    switch (size) {
      case 'tiny':
        return `
          width: 32px;
          height: 32px;
          padding: 6px;
        `;
      case 'small':
        return `
          width: 48px;
          height: 48px;
          padding: 8px;
        `;
      case 'medium':
        return `
          width: 60px;
          height: 60px;
          padding: 12px;
        `;
      case 'large':
        return `
          padding: 20px;
        `;
      case 'huge':
        return `
          padding: 30px;
        `;
    }
  }}
`;

export interface IconButtonProps {
  size?: Size;
  variant?: 'primary' | 'secondary' | 'gradient';
  outline?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
  icon: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ variant = 'gradient', icon, size = 'medium', outline = false, onClick }) => {
  return (
    <Container
      onClick={onClick}
      outline={outline}
      size={size}
    >
      {icon}
    </Container>
  );
};
