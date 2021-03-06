import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Header, Name } from './style';
import { Avatar, getInitials } from '@csmm/ui';
import { ConnectionsWrapper } from 'components';
import { useUser } from 'hooks';

// TODO: breaks when reloading app
export const Profile: FC = () => {
  const { userData } = useUser();
  return (
    <>
      <Helmet>
        <title>CSMM | Profile</title>
      </Helmet>
      <Container>
        <Header>
          <Avatar alt={`${userData.firstName} ${userData.lastName}`} size="huge">
            {getInitials(userData.firstName!, userData.lastName!)}
          </Avatar>
          <Name>{userData.firstName} {userData?.lastName}</Name>
        </Header>
        <ConnectionsWrapper />
      </Container>
    </>
  );
};
