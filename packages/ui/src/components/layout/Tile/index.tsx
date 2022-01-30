import { FC } from 'react';
import { styled, Color, AlertVariants } from '../../../styled';
import { keyframes } from 'styled-components';
import { Loading } from '../../../';

const shake = keyframes`
  2.5%, 22.5% {
    transform: translate3d(-1px, 0, 0);
  }
  5%, 20% {
    transform: translate3d(2px, 0, 0);
  }

  7.5%, 12.5%, 17.5% {
    transform: translate3d(-4px, 0, 0);
  }
  10%, 15% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Container = styled.div<{ bgColor: Color | AlertVariants | 'white', clickable: boolean, loading: boolean }>`
  width: 300px;
  height: 285px;
  border-radius: 15px;
  box-shadow: 1px 14px 15px -12px #00000023;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px 50px;
  background-color: ${({ bgColor, loading, theme }) => loading ? '#fff' : theme.colors[bgColor]};
  cursor: ${({ clickable }): string => clickable ? 'pointer' : 'default'};
  animation: ${({ clickable }) => clickable ? shake : null} 4s cubic-bezier(.36,.07,.19,.97) infinite both;
  transform: translate3d(0,0,0);
  position: relative;
`;

const ContentContainer = styled.div<{ textColor: Color | AlertVariants | 'white' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h4 {
    font-weight: 700;
    font-size: 1.225rem;
  }
  p {
    font-weight: 800;
    font-size: 3.225rem;
  }

  h4, p {
    color: ${({ textColor, theme }) => theme.colors[textColor]};
  }
`;

export interface TileProps {
  loading?: boolean
  bgColor: Color | AlertVariants | 'white';
  title?: string;
  description?: string;
  textColor: Color | AlertVariants | 'white';
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any | void;
}

export const Tile: FC<TileProps> = ({
  loading = false,
  bgColor,
  title,
  description,
  textColor,
  onClick
}) => {
  function isClickable(): boolean {
    return typeof onClick === 'function' ? true : false;
  }

  return (
    <Container
      bgColor={bgColor}
      clickable={isClickable()}
      loading={loading}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => (typeof onClick === 'function' ? onClick(e) : null)}
    >
      {
        loading ?
          <Loading />
          :
          <ContentContainer textColor={textColor}>
            <h4>{title}</h4>
            <p>{description}</p>
          </ContentContainer>
      }
    </Container>
  );
};
