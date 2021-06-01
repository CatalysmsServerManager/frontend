import { FC, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { Spinner } from 'components';
import { Container } from './style';
import { Color, Size, Variant, AlertVariants } from 'styled/types';

export interface ButtonProps {
  disabled?: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => any;
  isLoading?: boolean;
  icon?: ReactNode;
  size?: Size;
  type?: 'submit' | 'reset' | 'button';
  variant?: Variant;
  color?: Color | AlertVariants;
  text: string;
  isWhite?: boolean;
}

export const Button: FC<ButtonProps> = ({
  icon,
  size = 'medium',
  type = 'button',
  isLoading = false,
  text,
  color = 'primary',
  disabled = false,
  isWhite = false,
  variant = 'default',
  onClick,
}) => {
  function content(): JSX.Element {
    return (
      <>
        { isLoading ? <Spinner color={variant === 'outline' ? color : 'white'} size="small" /> : icon}
        <span>{text}</span>
      </>
    );
  }

  return (
    <Container
      color={color}
      disabled={disabled}
      icon={!!icon}
      isLoading={isLoading}
      onClick={disabled ? undefined : onClick}
      outline={variant === 'outline'}
      size={size}
      type={type}
      white={isWhite}
    >
      {content()}
    </Container>
  );
};
