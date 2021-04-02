import { styled } from 'styled';

export const Container = styled.div`
  position: relative;
  width: 30px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #cccccc;
  border-radius: 20px;
  margin: 0;
`;

export const Inner = styled.span<{ isChecked: boolean }>`
  display: block;
  width: 100%;
  height: 9px;
  background: ${({ theme, isChecked }): string => isChecked ? theme.gradient : theme.gray};
  ${({ isChecked }) => isChecked ? 'transition: background 0.2s ease-in-out .2s;' : null}
`;

export const Dot = styled.span<{ isChecked: boolean, disabled: boolean }>`
  display: block;
  width: 18px;
  height: 18px;
  background-color: ${({ theme, disabled }) => disabled ? theme.gray : theme.secondary};
  box-shadow: ${({ theme }) => theme.shadow};
  position: absolute;
  margin-top: -4.5px;
  top: 0;
  bottom: 0;
  right: ${({ isChecked }): string => isChecked ? '0px' : '20px'};
  border-radius: 50%;
  transition: all 0.2s ease-in 0s;
`;