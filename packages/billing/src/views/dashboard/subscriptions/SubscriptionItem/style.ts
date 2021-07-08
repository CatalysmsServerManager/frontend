import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';

export const Container = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  margin: 20px 0;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Data = styled.div`
color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    width: calc(100% / 4);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      cursor: pointer;
    }
`;
