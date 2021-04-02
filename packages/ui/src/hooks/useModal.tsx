import * as React from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled';
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

interface IModalProps {
  isOpen?: boolean;
  elementId: string;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen = false, elementId }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Overlay>
      <Container
        animate={{ opacity: 1, top: 0, scale: 1 }}
        initial={{ opacity: 0, top: 150, scale: .8 }}
        transition={{ duration: 1, type: 'spring', bounce: .6 }}
      >
        {children}
      </Container>
    </Overlay>,
    document.getElementById(elementId) as HTMLElement
  );
};

export const useModal = () => {
  const [isOpen, setOpen] = React.useState(false);

  const open = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const close = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const ModalWrapper = React.useCallback(({ children }) => (<Modal elementId="modal" isOpen={isOpen}>{children}</Modal>), [isOpen]);
  return [ModalWrapper, open, close];
};