import { styled } from '@csmm/ui';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  opacity:0;
  height: 100vh;
  padding: 20rem;
  background-color: ${({ theme }) => theme.colors.background};
  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  p {
    color: white;
    font-size: 1.5rem;
    font-size: 500;
    margin-bottom: 5rem;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 2rem;
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction:row;
  align-items: center;
`;

export const Image = styled.div`
  background:${({ theme }): string => theme.gradient.primary};
  width: 400px;
  height: 100%;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: 900;
`;

export const Content = styled.div`
  background-color: ${({ theme }): string => theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;

  form {
    width: 80%;
    margin: 0 auto;
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 2.5rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    width: 62%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 5rem;
  }

`;
