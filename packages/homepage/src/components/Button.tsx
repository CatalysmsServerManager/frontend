import { FC } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const StyledButton = styled.button<{ alt: boolean }>`
  background-color: ${({ theme, alt }) => alt ? theme.title : theme.main};
  color: white;
  font-weight: 500;
  padding: 5px 20px;
  border-radius: 3px;
  box-shadow: 6px 3px 6px -3px rgba(0,0,0,0.16);
  transition: background-color .2s ease-in-out;
  transition: transform .2s ease-in-out;

  &:hover{
    background-color: ${({ theme, alt }) => lighten(0.05, alt ? theme.title : theme.main)}!important;
    transform: translateY(-3px);
  }
`;

interface ButtonProps {
  alt?: boolean;
}
export const Button: FC<ButtonProps> = ({ alt = false, children }) => {
  return (
    <StyledButton alt={alt}>
      {children}
    </StyledButton>
  );
};
