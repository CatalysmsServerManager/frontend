import { motion } from 'framer-motion';
import styled from 'styled-components';

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
    color: ${({ theme }) => theme.s};
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
    color: ${({ theme }) => theme.s};
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
    background-color:${({ theme }) => theme.p};
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1rem;

    &.active{
      background-color: ${({ theme }) => theme.p}
    }
    &.deploy {
      background-color: ${({ theme }) => theme.c};
    }
    &.cancelled {
      background-color: ${({ theme }) => theme.s};
    }
    &.overdue, &.deleted {
      background-color: ${({ theme }) => theme.error};
    }
  }
`;
