import { styled } from '../../styled';

export const Template = styled.button<{ icon: boolean, isLoading: boolean, outline: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 2.5rem;
  background: ${({ theme, outline }): string => outline ? 'transparent' : theme.gradient};
  border: none;
  background-size: 200% auto;
  color: ${({ theme, outline }) => outline ? theme.secondary : 'white'};
  font-weight: 900;
  border: 2px solid ${({ theme, outline }) => outline ? theme.secondary : 'none'};
  cursor: pointer;
  line-height: 19px;
  letter-spacing: 0;
  box-shadow: ${({ theme }): string => theme.shadow};
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);


  &:disabled{
    cursor: default;
    background: ${({ theme, outline }) => outline ? 'transparent' : theme.gray};
    border-color: ${({ theme, outline }) => outline ? theme.gray : 'transparent'};
    color: ${({ theme, outline }) => outline ? theme.gray : 'white'};
  }
  &:focus { outline: 0; }
  &:hover {
    background-position: right center;
    span { color: ${({ outline, theme }): string => outline ? theme.secondary : 'white'}; }
  }

  svg {
    display: ${({ icon, isLoading }): string => icon || isLoading ? 'block' : 'none'};
    cursor: pointer;
    fill: white;
  }

  span {
    margin-left: ${({ icon, isLoading }): string => icon || isLoading ? '10px' : '0px'};
    color: white;
    font-size: 1.1rem;
    font-weight: 800;
  }
`;

export const Small = styled(Template)`
  padding: 6px 15px;
`;

export const Medium = styled(Template)`
  padding: 10px 18px;
`;

export const Large = styled(Template)`
  padding: 15px 22px;
`;
