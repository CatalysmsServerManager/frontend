import { FC } from 'react';
import styled from 'styled-components';
import { Connection } from './Connection';
import Discord from '../../../images/discord-white.png';
export const Container = styled.div`
  width: 600px;
  height: auto;
  h2 {
    margin-bottom: 25px;
  }
`;
export const ConnectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConnectionsWrapper: FC = () => {
  return (
    <Container>
      <h2>Connections</h2>
      <ConnectionsContainer>
        <Connection icon={Discord} source='Discord' />
      </ConnectionsContainer>
    </Container>
  );
};
