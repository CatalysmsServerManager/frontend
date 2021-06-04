import { styled } from '@csmm/ui';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  min-width: 140px;
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  z-index: 50;
  padding: 10px 15px;
  transform: translateY(-50%);

  svg {
    cursor: pointer;
  }

  ul {
    width: 100%;
  }


  li {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    margin-top:10px;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-weight: 600;
    cursor: pointer;

    a {
      background-color: transparent;
      color: inherit;
      display: flex;
      align-items: center;
      padding: 0;
      justify-content: flex-start;
    }
    span {
      margin-left: 10px;
      color: ${({ theme }): string => theme.colors.secondary};
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
