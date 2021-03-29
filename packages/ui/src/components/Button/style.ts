import { styled } from '../../styled';

interface ButtonProps {
  active: boolean;
  hasIcon: boolean;
  isLoading: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: fit-content;
  svg {
    display: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? 'block' : 'none'};
    cursor: pointer;
    fill: white;
  }

  span {
    margin-left: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? '10px' : '0px'};
    color: white;
    font-size: 1.1rem;
    font-weight: 800;
  }

  background-color: ${({ theme, active }): string => (active ? theme.primary : theme.gray)};
  transition: 0.2s width ease-in-out, 0.2s transform ease-in-out;
  padding: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? '7px 12px' : '9px 20px'};

  &:hover {
    color: white;
    transform: translateY(-5px);
    background-color: ${({ theme, active }): string => (active ? theme.primary : '#939393')}A3;
  }
`;
