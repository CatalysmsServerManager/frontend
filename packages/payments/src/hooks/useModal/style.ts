import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  z-index: 1000; /* Should show above everything. */
`;

export const Container = styled(motion.div)`
  position: relative;
  min-height: 200px;
  max-height: 750px;
  background-color: white;
  padding: 25px 25px 15px 25px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  border-radius: 10px;
  p {
    text-align: left !important;
    margin-top: 15px;
  }
`;
