import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const Left = styled(motion.div)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.p};
  overflow: hidden;
`;
export const Right = styled(motion.div) <{ url: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  opacity: 0;
  position: relative;
  overflow: hidden;

  header {
    padding-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
      margin-left: 10px;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 800;
      color: ${({ theme }) => theme.s};
      z-index: 2;
    }
  }
`;

export const Title = styled(motion.h1)`
  color: white;
  font-size: 7rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  padding: 0 150px;
  justify-content: center;
  flex-direction: column;
  p.text{
    z-index: 2;
    font-size: 2.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.s};
    margin-bottom: 20px;
    line-height: 1.5;

    strong {
      background-color: ${({ theme }) => theme.p};
      color: white;
      font-weight: 800;
      border: 3px solid ${({ theme }) => theme.p};
      border-radius: 5px;
    }
  }
`;

export const Icon = styled(motion.img)`
  width: 40px;
  height: auto;
  z-index: 10;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: space-evenly;
  width: 25%;
  padding-bottom: 15px;
`;

export const AbsoluteIcon = styled(motion.img)`
  position: absolute;
  right: -75%;
  top: 25%;
  width: 100%;
  height: 100%;
  opacity: .2;
  z-index: -1;
  transform: rotate(45deg);
`;
