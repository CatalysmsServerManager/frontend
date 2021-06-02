import { styled } from '@csmm/ui';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: white;
  opacity: 0;
  border-radius: 10px;
  padding: 20px;
  width: 1100px;
  min-height: 300px;
  height: fit-content;
  overflow-y: hidden;
  box-shadow: 1px 14px 15px -12px #00000023;
  transition: max-height 0.3s ease-in-out;
`;

export const Header = styled.div`
  width: 100%;
  height: 35px;
  h3 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;

  &.center{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 225px;
  }
`;

interface IProps {
  title: string;
  center?: boolean
}

export const ListWrapper: React.FC<IProps> = ({ title, center = false, children }) => {
  return (
    <Container
      animate={{ opacity: 1 }}
    >
      <Header><h3>{title}</h3></Header>
      <Content className={center ? 'center' : ''}>
        {children}
      </Content>
    </Container>
  );
};
