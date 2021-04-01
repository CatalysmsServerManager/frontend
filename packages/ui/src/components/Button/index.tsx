import { FC, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { Spinner } from 'components';
import { Small, Medium, Large } from './style';

export interface ButtonProps {
  disabled?: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => any;
  isLoading?: boolean;
  icon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'reset' | 'button';
  outline?: boolean;
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
  outline = false,
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

  switch (size) {
    case 'small':
      return (
        <Small
          disabled={disabled}
          icon={!!icon}
          isLoading={isLoading}
          onClick={disabled ? undefined : onClick}
          outline={outline}
          type={type}
          white={white}
        >
          {content()}
        </Small>
      );
    case 'medium':
      return (
        <Medium
          disabled={disabled}
          icon={!!icon}
          isLoading={isLoading}
          onClick={disabled ? undefined : onClick}
          outline={outline}
          type={type}
          white={white}
        >
          {content()}
        </Medium>
      );
    case 'large':
      return (
        <Large
          disabled={disabled}
          icon={!!icon}
          isLoading={isLoading}
          onClick={disabled ? undefined : onClick}
          outline={outline}
          type={type}
          white={white}
        >
          {content()}
        </Large>
      );
  };
};
