import styled from 'styled';
import { AlertVariants } from 'styled/types';
import { lighten } from 'polished';

export const Container = styled.div`

  button {
    margin-top: 1rem;
    width: 100%;
  }
  h2 {
    color: black;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    text-align: center!important;
    font-size: 1.225rem;
    max-width: 400px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const IconContainer = styled.div<{ type: AlertVariants }>`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme, type }): string => theme.colors[type]};
    stroke: ${({ theme, type }): string => theme.colors[type]};
  }
  background-color: ${({ theme, type }): string => lighten(0.2, theme.colors[type])};;
  padding: 8px;
  border-radius: 50%;
  width: fit-content;
  margin: 0 auto 2rem auto;
`;
