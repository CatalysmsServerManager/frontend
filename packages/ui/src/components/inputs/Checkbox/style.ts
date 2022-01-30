import { styled } from '../../../styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2.5rem;
`;

export const Label = styled.label<{ position: 'left' | 'right' }>`
  margin: ${({ position }) => position === 'left' ? '0 2.5rem 0 0' : '0 0 0 2.5rem'};
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;

// this is the container
export const CheckboxContainer = styled.div <{ isChecked?: boolean }>`
  display: flex;
  position: relative;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ isChecked, theme }): string => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ isChecked, theme }): string => isChecked ? theme.colors.primary : 'transparent'};
  transition: box-shadow .125s linear, border-color .15s linear;
  cursor: pointer;
  overflow: visible;
  &.placeholder {
    border: none; /* Otherwise the border does not have the animation */
    border-radius: 4px;
    width: 27px;
    height: 27px;
    cursor: default;
  }
`;

export const CheckMarkContainer = styled.div<{ isChecked: boolean }>`
  display: ${({ isChecked }): string => isChecked ? 'flex' : 'none'};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
    stroke: white;
  }
`;
