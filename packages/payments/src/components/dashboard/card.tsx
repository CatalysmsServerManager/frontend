import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Loading } from '../../components';

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

interface IProps {
  loading?: boolean
  bgColor: string;
  title?: string;
  description?: string;
  textColor: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any | void;
}

const Container = styled.div<{ bgColor: string, clickable: boolean, loading: boolean }>`
  width: 300px;
  height: 285px;
  border-radius: 15px;
  box-shadow: 1px 14px 15px -12px #00000023;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0 0px 25px 50px;
  background-color: ${({ bgColor, loading }) => loading ? '#fff' : bgColor};
  cursor: ${({ clickable }): string => clickable ? 'pointer' : 'default'};
  animation: ${({ clickable }) => clickable ? shake : null} 4s cubic-bezier(.36,.07,.19,.97) infinite both;
  transform: translate3d(0,0,0);
  position: relative;
`;

const ContentContainer = styled.div<{ textColor: string }>`
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
    color: ${({ textColor }) => textColor};
  }
`;

export const Card: FC<IProps> = ({
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
      { loading ?
        <Loading />
        :
        <ContentContainer
          textColor={textColor}
        >
          <h4>{title}</h4>
          <p>{description}</p>
        </ContentContainer>
      }
    </Container>
  );
};
