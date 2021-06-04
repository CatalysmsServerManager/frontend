import { FC } from 'react';
import { styled } from '@csmm/ui';
import { Connection } from './Connection';
import { FaDiscord as Discord } from 'react-icons/fa';

const Container = styled.div`
  width: 600px;
  height: auto;
  h2 {
    margin-bottom: 25px;
  }
`;
const ConnectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConnectionsWrapper: FC = () => {
  return (
    <Container>
      <h2>Connections</h2>
      <ConnectionsContainer>
        <Connection icon={<Discord fill="white" size={25} />} source="Discord" />
      </ConnectionsContainer>
    </Container>
  );
};
