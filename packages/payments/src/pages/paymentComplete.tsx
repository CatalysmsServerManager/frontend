import { FC } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';
import checkmark from '../images/checkmark-white.png';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
    margin-bottom: 15px;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 50px;
  }
`;

const CheckMarkContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  padding: 15px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: auto;
  }
`;

export const PaymentComplete: FC = () => {
  return (
    <Container>
      <CheckMarkContainer
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
      >
        <img alt="checkmark" src={checkmark} />
      </CheckMarkContainer>
      <h1>Thank you for your purchase!</h1>
      <p>Your payment was successful and your order is complete. We have sent a confirmation e-mail.</p>
    </Container>
  );
};
