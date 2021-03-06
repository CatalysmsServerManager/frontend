import { FC, useState, useEffect } from 'react';
import { styled, Button, Spinner } from '@csmm/ui';
import { httpService, routingService } from '../../services';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';
import { setRedirect } from '../../helpers';
import { useUser } from 'hooks';
import { UserData } from 'context';
import { ReactNode } from 'react';

const Container = styled.div<{ connected: boolean }>`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 15px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-weight: 600;
  }
`;

const IconContainer = styled.div<{ connected: boolean }>`
  background-color: ${({ connected, theme }) => connected ? theme.colors.primary : theme.colors.gray};
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  img {
    width: 35px;
    height: auto;
  }
`;

const ButtonContainer = styled.div<{ connected: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  button {
    background-color: ${({ connected, theme }): string => connected ? theme.colors.gray : theme.colors.primary}!important;
  }
`;

interface ConnectionProps {
  source: string;
  icon: ReactNode;
}

export const Connection: FC<ConnectionProps> = ({ source, icon }) => {
  const { userData, setUserData } = useUser();
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  useEffect(() => {
    if (userData?.discordId) {
      setConnected(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Container connected={false}><Spinner size="medium" /></Container>;
  }

  async function disconnect() {
    const response = await httpService.delete(`/auth/${source}`);
    if (!response.ok) {
      enqueueSnackbar('Something went wrong trying to disconnect Discord. Please try again!', { variant: 'error' });
      return;
    }
    const session = await response.json() as UserData;
    if (session) setUserData(session);
    setConnected(false);
    enqueueSnackbar(`${source} has been disconnected.`, { variant: 'info' });
  }

  async function connect() {
    setRedirect(location.pathname);
    routingService.navigateExternal('/auth/discord');
  }

  return (
    <Container connected={connected}>
      <IconContainer connected={connected}>
        {icon}
      </IconContainer>
      <div>
        <h3>{source}</h3>
      </div>
      <ButtonContainer connected={connected}>
        <Button
          onClick={connected ? disconnect : connect}
          size="medium"
          text={connected ? 'Disconnect' : 'Connect'}
        />
      </ButtonContainer>
    </Container>
  );
};
