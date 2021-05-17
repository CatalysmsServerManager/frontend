import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Avatar } from '../components';
import { ConnectionsWrapper } from '../components/profile/connections/ConnectionsWrapper';
import { UserContext } from '../context';

const Container = styled.div`
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 100px;
`;
const Name = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.s};
  margin-left: 50px;
  text-transform: capitalize;
`;

export const Profile: FC = () => {
  const { userData } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <Avatar />
        <Name>{userData?.firstName} {userData?.lastName}</Name>
      </Header>
      <ConnectionsWrapper />
    </Container>
  );
};
