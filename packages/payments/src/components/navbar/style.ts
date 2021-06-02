import { styled } from '@csmm/ui';
import { motion } from 'framer-motion';

export const Container = styled(motion.div) <{ toTop: boolean }>`
  width: 0px;
  position: relative;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: ${({ toTop }) => toTop ? 'flex-start' : 'center'};
  padding: 20px 30px 40px 30px;

  img {
    display: block;
    width: 80px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 20px;
    cursor: pointer;
  }

  h2 {
    color: ${({ theme }): string => theme.colors.secondary};
    font-weight: 800;
    text-align: center;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.225rem;
    margin-bottom: 100px;
  }
`;

export const DiscordContainer = styled(motion.div)`
  position: relative;
  padding: 55px 15px 0 15px;
  margin-top: auto;
  width: 100%;
  background-color: #e8edf5;
  height: 270px;
  opacity:0;
  border-radius: 10px;

  h4 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    text-align: center;
    font-size: 1.2rem;
  }
  p{
    opacity: .5;
    font-size: 95%;
    line-height: 170%;
    font-weight: 500;
    margin-bottom: 20px;
  }

`;

export const AlertContainer = styled.div`
  position: absolute;
  top: -25px;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: white;

  svg{
    fill: ${({ theme }) => theme.colors.primary};
  }

  div {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;

  a {
    width: 100%;
    color: black;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    margin: 8px 0;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.2s transform ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      svg, p {
        fill: white;
        color: white;
      }
    }
    p {
      font-weight: 800;
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  margin: 0 auto;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;
