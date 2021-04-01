import { FC, ReactNode } from 'react';
// import { Icon } from '../icons';
import { styled } from 'styled';

const Template = styled.button<{ outline: boolean }>`
  background: ${({ theme, outline }) => outline ? 'transparent' : theme.gradient};
  border-radius: 1.5rem;
  border: 3px solid ${({ theme, outline }) => outline ? theme.primary : 'transparent'};
  background-clip: padding-box;
  cursor: pointer;
  transition: all .3s ease-in-out;
  box-shadow: ${({ theme }): string => theme.shadow};
  line-height: 19px;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
  svg {
    fill: ${({ theme, outline }) => outline ? theme.primary : 'white'}!important;
    stroke: ${({ theme, outline }) => outline ? theme.primary : 'white'}!important;
  }
  &:hover {
    transform: translateY(-3px);
  }
`;
const Small = styled(Template)`
  padding: 8px;
`;
const Medium = styled(Template)`
  padding: 12px;
`;
const Large = styled(Template)`
  padding: 15px;
`;

export interface IconButtonProps {
  icon: ReactNode;
  size: 'small' | 'medium' | 'large';
  outline: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  glyph: string;
}

export const IconButton: FC<IconButtonProps> = ({ icon, size, outline, onClick, glyph }) => {
  switch (size) {
    case 'small':
      return (
        <Small
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void => (typeof onClick === 'function' ? onClick(e) : null)}
          outline={outline}
        >
          {/* <Icon glyph={glyph} size={24} /> */}
        </Small>
      );
    case 'medium':
      return (
        <Medium
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void => (typeof onClick === 'function' ? onClick(e) : null)}
          outline={outline}
        >
          { /* <Icon glyph={glyph} size={32} /> */}
        </Medium>
      );
    case 'large':
      return (
        <Large
          onClick={(e: React.MouseEvent<HTMLButtonElement>): void => (typeof onClick === 'function' ? onClick(e) : null)}
          outline={outline}
        >
          { /* <Icon glyph={glyph} size={48} /> */}
        </Large>
      );
  };
};
