import styled from 'styled';
import { Color, AlertVariants, Size } from 'styled/types';

export const Container = styled.button<{
  size: Size;
  white: boolean,
  icon: boolean,
  isLoading: boolean,
  color: Color | AlertVariants;
  outline: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 2.5rem;

  background: ${({ theme, outline, white, color }): string => {
    if (outline) return 'transparent;';
    else if (white) return 'white;';
    else return `${theme.colors[color]};`;
  }};

  border: none;
  background-size: 200% auto;
  font-weight: 900;
  border: 2px solid ${({ theme, outline, white, color }) => {
    if (white) return 'white;';
    else if (outline) return `${theme.colors[color]};`;
    else return 'none;';
  }};
  cursor: pointer;
  line-height: 19px;
  letter-spacing: 0;
  box-shadow: ${({ theme }): string => theme.colors.shadow};
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);


  &:disabled{
    cursor: default;
    background: ${({ theme, outline }) => outline ? 'transparent' : theme.colors.gray};
    border-color: ${({ theme, outline }) => outline ? theme.colors.gray : 'transparent'};
    color: ${({ theme, outline }) => outline ? theme.colors.gray : 'white'};

    span {
      color: ${({ theme, outline }) => outline ? theme.colors.gray : 'white'};
    }
    &:hover {
      span {
        color: ${({ theme, outline }): string => outline ? theme.colors.gray : 'white'};
      }
    }
  }

  &:focus { outline: 0; }
  &:hover {
    background-position: right center;
  }

  svg {
    display: ${({ icon, isLoading }): string => icon || isLoading ? 'block' : 'none'};
    cursor: pointer;
    fill: ${({ color, theme, outline, white }): string => outline ? theme.colors[color] : white ? theme.colors[color] : 'white'};
    stroke: ${({ color, theme, outline, white }): string => outline ? white ? 'white' : theme.colors[color] : white ? theme.colors[color] : 'white'};
  }


  span {
    margin-left: ${({ icon, isLoading }): string => icon || isLoading ? '10px' : '0px'};
    color: ${({ color, theme, outline, white }) => outline ? white ? 'white' : theme.colors[color] : white ? 'black' : 'white'};
    font-size: 1.1rem;
    font-weight: 800;
    &:hover {
      color: ${({ color, outline, theme, white }): string => white ? outline ? 'white' : theme.colors[color] : outline ? theme.colors[color] : 'white'};
    }
  }

  ${({ size }) => {
    switch (size) {
      case 'tiny':
        return `
          padding: 4px 12px;
        `;
      case 'small':
        return `
          padding: 6px 15px;
        `;
      case 'medium':
        return `
          padding: 10px 18px;
        `;
      case 'large':
        return `
          padding: 14px 22px;
        `;
      case 'huge':
        return `
          span {
            font-size: 105%;
          }
          padding: 16px 24px;
        `;
    }
  }}
`;
