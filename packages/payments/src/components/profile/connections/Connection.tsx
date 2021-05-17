import { FC, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../../button';
import { IUserData, UserContext } from '../../../context';
import { Spinner } from '../../loaders';
import { httpService, routingService } from '../../../services';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';
import { setRedirect } from '../../../helpers';

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
  background-color: ${({ connected, theme }) => connected ? theme.p : theme.gray};
  width: 100px;
  height: 100px;
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
    background-color: ${({ connected, theme }): string => connected ? theme.gray : theme.p}!important;
  }
`;

interface IProps {
  source: string;
  icon: string;
}

export const Connection: FC<IProps> = ({ source, icon }) => {
  const { userData, setUserData } = useContext(UserContext);
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
    return <Container connected={false}><Spinner /></Container>;
  }

  async function disconnect() {
    const response = await httpService.delete(`/auth/${source}`);
    if (response.ok) {
      const session = await response.json() as IUserData;
      if (session && setUserData) setUserData(session);
      setConnected(false);
      enqueueSnackbar(`${source} has been disconnected.`, { variant: 'info' });
      // discord unlinked
    }
  }
  async function connect() {
    setRedirect(location.pathname);
    routingService.navigateExternal('/auth/discord');
  }

  return (
    <Container connected={connected}>
      <IconContainer connected={connected}>
        <img alt={`logo ${source}`} src={icon} />
      </IconContainer>
      <div>
        <h3>{source}</h3>
      </div>
      <ButtonContainer connected={connected}>
        <Button onClick={connected ? disconnect : connect}>{connected ? 'Disconnect' : 'Connect'}</Button>
      </ButtonContainer>
    </Container>
  );
};
