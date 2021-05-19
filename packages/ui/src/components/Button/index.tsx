import { FC, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { Spinner } from 'components';
import { Container } from './style';
import { Size, Variant } from 'styled/types';

export interface ButtonProps {
  disabled?: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => any;
  isLoading?: boolean;
  icon?: ReactNode;
  size?: Size;
  type?: 'submit' | 'reset' | 'button';
  variant?: Variant;
  text: string;
  white?: boolean;
}

export const Button: FC<ButtonProps> = ({
  icon,
  size = 'medium',
  type = 'button',
  isLoading = false,
  text,
  disabled = false,
  white = false,
  variant = 'default',
  onClick,
}) => {
  function content(): JSX.Element {
    return (
      <>
        { isLoading ? <Spinner /> : icon}
        <span>{text}</span>
      </>
    );
  }

  return (
    <Container
      disabled={disabled}
      icon={!!icon}
      isLoading={isLoading}
      onClick={disabled ? undefined : onClick}
      outline={variant === 'outline'}
      size={size}
      type={type}
      white={white}
    >
      {content()}
    </Container>
  );
};
