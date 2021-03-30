import { FC, useState, ReactElement, ReactNode } from 'react';
import { styled } from 'styled';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
  border: 3px solid ${({ theme }): string => theme.gray};
  border-radius: 2rem;
  color: ${({ theme }): string => theme.text};
  margin-bottom: 50px;
`;

const Content = styled.div`
  width: 100%;
`;

export interface TabSwitchProps {
  children: Array<ReactElement<{ label: string, children: ReactNode }>>;
}

export const TabSwitch: FC<TabSwitchProps> = ({ children }) => {
  const [selected, setSelected] = useState<string>(children[0].props.label);
  return (
    <Container>
      <AnimateSharedLayout>
        <List>
          {children.map((child) => (
            <TabItem
              isSelected={selected === child.props.label}
              key={child.props.label}
              label={child.props.label}
              onClick={() => setSelected(child.props.label)}
            />
          ))}
        </List>
      </AnimateSharedLayout>
      <Content>
        {children.filter((child) => child.props.label === selected ? child.props.children : undefined)}
      </Content>
    </Container>
  );
};

/* TAB COMPONENT */

const Item = styled.li<{ selected: boolean }>`
  cursor: pointer;
  text-align: center;
  flex: 1 1 0;
  padding: 15px;
  font-weight: 800;
  flex-grow:1;
  flex-basis: 0;
  border-radius: 2rem;
  transition: all .2s ease-in-out;
  position: relative;
  span {
    position: relative;
    font-size: 1.2rem;
    z-index: 1;
    color: ${({ theme, selected }): string => selected ? theme.primary : theme.text};
  }
  &:first-child{
    margin-right: 7.5px;
  }
  &:last-child{
    margin-left: 7.5px;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  border-radius: 2rem;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: transparent;
`;

export interface TabProps {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}

const TabItem: FC<TabProps> = ({ isSelected, label, onClick }) => {
  return (
    <Item onClick={onClick} selected={isSelected} >
      {isSelected && (
        <Background
          animate={{ backgroundColor: '#ffffff' }}
          initial={false}
          layoutId="background"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
        </Background>
      )}
      <span>
        {label}
      </span>
    </Item>
  );
};
