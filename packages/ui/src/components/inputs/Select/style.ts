import { styled } from '../../../styled';
import { theme } from '../../../styled/theme';

export const Container = styled.div`
  width: fit-content;
  select {
    display: none;
  }
  label {
    margin-bottom: 5px;
    cursor: pointer;
  }
`;
export const SelectedContainer = styled.div<{ hasError: boolean }>`
  position: relative;
  width: fit-content;
  padding: .5rem 3rem .5rem 1.225rem;
  border-bottom-color: ${({ theme, hasError }): string => hasError ? theme.colors.error : 'transparent'};
  border-radius: .4rem;
  background-color: transparent;
  color: white;
  font-size: 1.3rem;
  /* border: 2px solid ${({ theme }): string => theme.colors.gray}; fix this later */
  text-align: center;
  font-weight: 600;
  cursor: pointer;

  p {
    color: black;
  }

  &:focus {
    border-bottom-color: ${({ theme, hasError }): string => hasError ? theme.colors.error : 'white'};
  }
  &::placeholder{
    text-transform: capitalize;
    font-weight: 600;
    color: white;
  }

  &.read-only {
    opacity: .5;
  }

`;

export const ArrowContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

export const DropDownContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }): string => theme.colors.gray};
  border-radius: 1.5rem;
`;

export const Option = styled.div<{ selected: boolean }>`
  position: relative;
  width: 100%;
  padding: 1rem 2rem 1rem 1.2rem;
  cursor: pointer;
  background-color: ${({ selected }): string => selected ? theme.colors.primary : 'transparent'};

  span {
    color: ${({ selected }): string => selected ? 'white' : 'black'};
  }

  &:hover {
    span {
      color: white;
    }
    background-color: ${({ theme }): string => theme.colors.primary};
  }
  &:first-child {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
  &:last-child {
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }

  svg {
    fill: white;
  }
`;

export const CheckMarkContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
