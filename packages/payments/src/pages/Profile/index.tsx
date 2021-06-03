import { FC } from 'react';
import { Container, Header, Name } from './style';
import { Avatar, getInitials } from '@csmm/ui';
import { ConnectionsWrapper } from '../../components/profile/connections/ConnectionsWrapper';
import { useUser } from 'hooks';

export const Profile: FC = () => {
  const { userData } = useUser();

  return (
    <Container>
      <Header>
        <Avatar alt={`${userData.firstName} ${userData.lastName}`} size="huge">
          {getInitials(userData.firstName!, userData.lastName!)}
        </Avatar>
        <Name>{userData.firstName} {userData?.lastName}</Name>
      </Header>
      <ConnectionsWrapper />
    </Container>
  );
};
