import styled from 'styled';

export const Template = styled.button<{ white: boolean, icon: boolean, isLoading: boolean, outline: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 2.5rem;
  background: ${({ theme, outline, white }): string => outline ? 'transparent' : white ? 'white' : theme.gradient.primary};
  border: none;
  background-size: 200% auto;
  font-weight: 900;
  border: 2px solid ${({ theme, outline, white }) => white ? 'white' : outline ? theme.colors.secondary : 'none'};
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
    fill: ${({ theme, outline, white }): string => outline ? theme.colors.secondary : white ? theme.colors.secondary : 'white'};
    stroke: ${({ theme, outline, white }): string => outline ? white ? 'white' : theme.colors.secondary : white ? theme.colors.secondary : 'white'};

  }

  span {
    margin-left: ${({ icon, isLoading }): string => icon || isLoading ? '10px' : '0px'};
    color: ${({ theme, outline, white }) => outline ? white ? 'white' : theme.colors.secondary : white ? theme.colors.secondary : 'white'};
    font-size: 1.1rem;
    font-weight: 800;
    &:hover {
      color: ${({ outline, theme, white }): string => white ? outline ? 'white' : theme.colors.secondary : outline ? theme.colors.secondary : 'white'};
    }
  }
`;

export const Small = styled(Template)`
  padding: 6px 15px;
`;

export const Medium = styled(Template)`
  padding: 10px 18px;
`;

export const Large = styled(Template)`
  padding: 14px 22px;
`;
