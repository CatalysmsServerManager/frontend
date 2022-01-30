import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { styled } from '../../../styled';
import {
  AiOutlineRight as ArrowRight,
  AiOutlineDown as ArrowDown,
} from 'react-icons/ai';

const Container = styled.div`
  margin: 1rem 0;
`;

const TitleWrapper = styled.div<{ visible: boolean }>`
  display: flex;
  padding: 1rem;
  align-items: center;
  min-height: 40px;
  border-radius: ${({ visible }): string => visible ? '.7rem .7rem 0 0' : '.7rem'};
  background-color: ${({ theme }): string => theme.colors.primary};
  cursor: pointer;

  h3 {
    color: white;
    font-weight: 700;
    font-size: 1.8rem;
  }
  svg {
    fill: white;
    margin-right: 1rem;
  }

`;
const ContentContainer = styled(motion.div)`
  border-radius: 0 0 1rem 1rem;
  border: 1px solid ${({ theme }): string => theme.colors.gray};
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 4rem;
  overflow-y: hidden;
`;

export interface CollapseProps {
  title: string;
  defaultVisible?: boolean;
}
export const Collapse: FC<CollapseProps> = ({ title, children, defaultVisible = false }) => {
  const [visible, setVisible] = useState(defaultVisible);

  return (
    <Container>
      <TitleWrapper
        onClick={() => setVisible(!visible)}
        visible={visible}
      >
        {visible ? <ArrowDown size={20} /> : <ArrowRight size={20} />}
        <h3>{title}</h3>
      </TitleWrapper>
      <AnimatePresence>
        {
          visible &&
          <ContentContainer>
            {children}
          </ContentContainer>
        }
      </AnimatePresence>
    </Container>
  );
};
