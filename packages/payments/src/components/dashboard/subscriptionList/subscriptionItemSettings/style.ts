import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Plus } from '../../../../icons';

export const Container = styled(motion.div)`
  width: 225px;
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.s};
  z-index: 10;
  padding: 10px 15px;
  transform: translateY(-50%);

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
      color: white;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

export const StyledPlus = styled(Plus)`
  transform: rotate(45deg);
`;
