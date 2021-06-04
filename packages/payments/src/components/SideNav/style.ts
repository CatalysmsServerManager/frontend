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
    text-align: center;
    width: 100%;
    cursor: pointer;
    font-size: 2rem;
    margin-bottom: 100px;
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
