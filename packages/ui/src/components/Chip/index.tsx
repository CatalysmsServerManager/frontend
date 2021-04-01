import { FC, ReactNode } from 'react';
import { styled } from 'styled';

const Container = styled.div<{ disabled: boolean, color: string, outline: boolean, hasAvatar: boolean, clickable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  padding: 3px 12px;
  border-radius: 1.5rem;
  cursor: ${({ clickable }): string => clickable ? 'pointer' : 'auto'};

  ${({ theme, color, outline }): string => {
    if (!outline) {
      return 'border: 2px solid transparent;';
    }

    switch (color) {
      case 'default':
        return `border: 2px solid ${theme.gray};`;
      case 'primary':
        return `border: 2px solid ${theme.primary};`;
      case 'secondary':
        return `border: 2px solid ${theme.secondary};`;
      case 'gradient':
        return `border: 2px solid ${theme.gradient};`;
    }
    return `border: 2px solid ${theme.primary};`;
  }}

  span {
    margin-left: ${({ hasAvatar }) => hasAvatar ? '5px' : 0};
    font-weight: 600;

    ${({ theme, color, outline }) => {
    if (!outline) {
      return 'color: white;';
    }

    switch (color) {
      case 'default':
        return `color: ${theme.gray};`;
      case 'primary':
        return `color: ${theme.primary};`;
      case 'secondary':
        return `color: ${theme.secondary};`;
      case 'gradient':
        return `color: ${theme.gradient};`;
    }
  }}
  }



  ${({ theme, color, outline }): string => {
    if (outline) {
      return 'background-color: transparent;';
    }

    switch (color) {
      case 'default':
        return `background-color: ${theme.gray};`;
      case 'primary':
        return `background-color: ${theme.primary};`;
      case 'secondary':
        return `background-color: ${theme.secondary};`;
      case 'gradient':
        return `background: ${theme.gradient};`;
    }
    return `background-color: ${theme.gray};`;
  }}
`;

export interface ChipProps {
  label: string;
  disabled?: boolean;
  avatar?: ReactNode;
  onClick?: () => void;
  onDelete?: () => void;
  color?: 'default' | 'primary' | 'secondary' | 'gradient';
  variant?: 'default' | 'outline'
}

export const Chip: FC<ChipProps> = ({ avatar, color = 'default', variant = 'default', label, disabled = false, onClick, onDelete }) => {
  return (
    <Container
      clickable={!!onClick}
      color={color}
      disabled={disabled}
      hasAvatar={!!avatar}
      onClick={onClick ? onClick : undefined}
      outline={variant !== 'default'}
    >
      {avatar}
      <span>{label}</span>
      {/* TODO: delete icon onDelete={onDelete ? onDelete : undefined} */}
    </Container>
  );
};
