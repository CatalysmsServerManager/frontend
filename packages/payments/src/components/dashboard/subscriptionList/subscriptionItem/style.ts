import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';

export const Container = styled(motion.li)`
  background-color: #e8edf5;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  a {
    background-color: white;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    border-radius: 8px;
    padding: 10px 15px;
  }

  &.loading{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.p {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    width: calc(100% / 4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export const State = styled.div`
  span {
    width: fit-content;
    background-color:${({ theme }) => theme.colors.primary};
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1rem;

    &.active{
      background-color: ${({ theme }) => theme.colors.primary}
    }
    &.deploy {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
    &.cancelled {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    &.overdue, &.deleted {
      background-color: ${({ theme }) => theme.colors.error};
    }
  }
`;
