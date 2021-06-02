import { FC, useContext } from 'react';
import { styled, Avatar, getInitials } from '@csmm/ui';
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
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 50px;
  text-transform: capitalize;
`;

export const Profile: FC = () => {
  const { userData } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <Avatar alt={`${userData?.firstName} ${userData?.lastName}`} size="huge">{getInitials(userData?.firstName!, userData?.lastName!)}</Avatar>
        <Name>{userData?.firstName} {userData?.lastName}</Name>
      </Header>
      <ConnectionsWrapper />
    </Container>
  );
};
