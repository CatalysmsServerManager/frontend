import { FC, ReactElement, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import { Spinner } from '../Spinner';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './style';

export interface ButtonProps {
  active?: boolean;
  className?: string;
  onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => any;
  isLoading?: boolean;
  to?: string;
  icon?: ReactNode;
  type?: 'submit' | 'reset' | 'button'
}

export const Button: FC<ButtonProps> = ({
  active = true,
  children,
  className,
  icon,
  type = 'button',
  to,
  isLoading = false,
  onClick,
}) => {
  function toLink(el: ReactElement): ReactElement {
    if (to) {
      return (<Link to={to}>{el}</Link>);
    }
    return el;
  }

  return (
    toLink(
      <ButtonContainer
        active={active}
        className={className}
        hasIcon={icon ? true : false}
        isLoading={isLoading}
        onClick={(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void => (typeof onClick === 'function' ? onClick(e) : null)}
        type={type}
      >
        {isLoading ? <Spinner /> : icon}
        <span>
          {children}
        </span>
      </ButtonContainer>
    )
  );
};
