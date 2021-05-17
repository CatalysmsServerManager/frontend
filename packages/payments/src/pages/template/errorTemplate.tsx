import { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: white;

  h1 {
    font-size: 5rem;
    color:${({ theme }) => theme.s};
    font-weight: 800;
    z-index: 2;
  }

  h2 {
    position: absolute;
    font-size: 30rem;
    font-weight: 800;
    margin-top: -25px;
    opacity: 0.3;
    color: ${({ theme }) => theme.p}
  }
`;

interface IProps {
  title: string;
  description: string;
}

export const ErrorTemplate: FC<IProps> = ({ title, description }) => {
  return (
    <Container>
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: .5 }}
      >{description}</motion.h1>
      <motion.h2
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: 'spring', bounce: .6, duration: 1 }}
      >
        {title}
      </motion.h2>
    </Container>
  );
};
