import { FC, ReactNode } from 'react';
import styled from 'styled';
import { AiOutlineClose as Icon } from 'react-icons/ai';

const Container = styled.div<{ disabled: boolean, color: string, outline: boolean, hasAvatar: boolean, clickable: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  padding: 3px 12px;
  border-radius: 1.5rem;
  cursor: ${({ clickable }): string => clickable ? 'pointer' : 'auto'};


  svg {
    transform: rotate(45deg);
    ${({ theme, color, outline }) => {
    if (!outline) {
      return 'fill: white; stroke: white;';
    }

    switch (color) {
      case 'default':
        return 'fill: white; stroke: white;';
      case 'primary':
        return `fill: ${theme.colors.primary}; stroke: ${theme.colors.primary}`;
      case 'secondary':
        return `fill: ${theme.colors.secondary}; stroke: ${theme.colors.secondary}`;
      case 'gradient':
        return 'fill: white; stroke: white;';
    }
  }}
  }

  ${({ theme, color, outline }): string => {
    if (!outline) {
      return 'border: 2px solid transparent;';
    }

    switch (color) {
      case 'default':
        return `border: 2px solid ${theme.colors.gray};`;
      case 'primary':
        return `border: 2px solid ${theme.colors.primary};`;
      case 'secondary':
        return `border: 2px solid ${theme.colors.secondary};`;
      case 'gradient':
        return `border: 2px solid ${theme.gradient.primary};`;
    }
    return `border: 2px solid ${theme.colors.primary};`;
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
        return `color: ${theme.colors.gray};`;
      case 'primary':
        return `color: ${theme.colors.primary};`;
      case 'secondary':
        return `color: ${theme.colors.secondary};`;
      case 'gradient':
        return `color: ${theme.gradient.primary};`;
    }
  }}
  }



  ${({ theme, color, outline }): string => {
    if (outline) {
      return 'background-color: transparent;';
    }

    switch (color) {
      case 'default':
        return `background-color: ${theme.colors.gray};`;
      case 'primary':
        return `background-color: ${theme.colors.primary};`;
      case 'secondary':
        return `background-color: ${theme.colors.secondary};`;
      case 'gradient':
        return `background: ${theme.gradient.primary};`;
    }
    return `background-color: ${theme.colors.gray};`;
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
      clickable={onClick !== undefined}
      color={color}
      disabled={disabled}
      hasAvatar={!!avatar}
      onClick={onClick ? onClick : undefined}
      outline={variant !== 'default'}
    >
      {avatar}
      <span>{label}</span>
      { onDelete && <Icon onClick={onDelete} size={14} />}
    </Container>
  );
};
