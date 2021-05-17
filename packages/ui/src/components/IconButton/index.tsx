import { FC } from 'react';
import { Icon } from 'components';
import styled from 'styled';

const Template = styled.button<{ outline: boolean }>`
  background: ${({ theme, outline }) => outline ? 'transparent' : theme.gradient.primary};
  border-radius: 50%;
  border: 3px solid ${({ theme, outline }) => outline ? theme.colors.primary : 'transparent'};
  background-clip: padding-box;
  cursor: pointer;
  box-shadow: ${({ theme }): string => theme.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  svg {
    cursor: pointer;
    path {
      fill: ${({ theme, outline }) => outline ? theme.colors.primary : 'white'}!important;
      stroke: ${({ theme, outline }) => outline ? theme.colors.primary : 'white'}!important;
    }
  }
`;
const Small = styled(Template)`
  padding: 8px;
`;
const Medium = styled(Template)`
  padding: 25px;
`;
const Large = styled(Template)`
  padding: 32px;
`;

export interface IconButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'gradient';
  outline?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
  glyph: string;
}

export const IconButton: FC<IconButtonProps> = ({ variant = 'gradient', size = 'medium', outline = false, onClick, glyph }) => {
  switch (size) {
    case 'small':
      return (
        <Small
          onClick={onClick}
          outline={outline}
        >
          <Icon glyph={glyph} />
        </Small>
      );
    case 'medium':
      return (
        <Medium
          onClick={onClick}
          outline={outline}
        >
          <Icon glyph={glyph} />
        </Medium>
      );
    case 'large':
      return (
        <Large
          onClick={onClick}
          outline={outline}
        >
          <Icon glyph={glyph} />
        </Large>
      );
  };
};
