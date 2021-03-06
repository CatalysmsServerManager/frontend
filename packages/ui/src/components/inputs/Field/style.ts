import { styled } from '../../../styled';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 25px;
  position: relative;
`;

export const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Label = styled.label<{ showError: boolean }>`
  color: ${({ theme, showError }): string => showError ? theme.colors.error : theme.colors.text};
  width: 100%;
  user-select: none;
  font-size: 1.2rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1rem;
    color: ${({ theme, showError }): string => showError ? theme.colors.error : theme.colors.text};
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  &.placeholder {
    height: 44px;
  }
  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 20px;
  }
  &:focus{
    .icon path {
      transition: fill .2s ease-in-out;
      fill: ${({ theme }): string => theme.colors.primary};
      stroke: ${({ theme }): string => theme.colors.primary};
    }
  }
`;

export const Input = styled.input<{ hasIcon: boolean; hasError: boolean; }>`
  width: 100%;
  padding-left: ${({ hasIcon }): string => hasIcon ? '60px' : '15px' /* 15 is the standard */};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  border-bottom: 2px solid ${({ theme, hasError }): string => hasError ? theme.colors.error : theme.colors.gray};
  font-weight: 600;
  ::selection {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    border-bottom: 2px solid ${({ theme, hasError }): string => hasError ? theme.colors.error : theme.colors.primary};
  }
  ::placeholder{
    text-transform: capitalize;
    font-weight: 600;
    color: ${({ theme }): string => theme.colors.gray};
  }
  &[readOnly]{
    opacity: .5;
  }
`;

export const ErrorContainer = styled.div<{ showError: boolean }>`
  position: absolute;
  min-height: 40px;
  display: flex;
  align-items: center;
  bottom: -45px;
  height: auto;
  width: ${({ showError }): string => showError ? '100%' : '0'};
  background-color: ${({ theme }): string => theme.colors.error};
  transition: width 0.2s ease-in-out, transform 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
  transform: ${({ showError }): string => `translate(${showError ? '0' : '5px'})`};
  z-index: 5;
`;

export const Error = styled.span`
  display: flex;
  align-items: center;
  min-width: 100%;
  width: 100%;
  padding: .5rem .5rem .5rem 1.5rem;
  height: 4rem;
  color: white;
  font-weight: 500;
  white-space: nowrap;
`;
