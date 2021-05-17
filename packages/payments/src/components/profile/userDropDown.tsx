import { FC } from 'react';
import { motion } from 'framer-motion';
import { authenticationService } from '../../services';
import styled from 'styled-components';
import { Person, Settings, SignOut } from '../../icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { setRedirect } from '../../helpers';

const Container = styled(motion.div)`
  width: 250px;
  min-height: 200px;
  background-color: white;
  position: absolute;
  right: -100px;
  top: 125px;
  box-shadow: 1px 14px 15px -12px #00000023;
  padding: 50px 15px 15px 15px;
  border-radius: 10px;
  z-index: 10;
  cursor: auto;
  h3 {
    color: ${({ theme }) => theme.s};
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const HeaderIcon = styled.div`
  position: absolute;
  top:-20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.p};
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Content = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  li,a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px 0;
    color: ${({ theme }): string => theme.s};
    transition: transform .2s ease-in-out;
    p {
      font-size: 1.2rem;
      font-weight: 500;
      margin-left: 10px;
      }

      &:hover {
        transform: translateX(5px)
      }
  }
`;

export const UserDropDown: FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  function signOut() {
    authenticationService.logout().then((ok) => {
      if (ok) {
        setRedirect(location.pathname);
        enqueueSnackbar('Successfully signed out.', { variant: 'success' });
        navigate('/');
        return;
      }
      enqueueSnackbar('Something went wrong signing out. Please try again.', { variant: 'error' });
    });
  }

  return (
    <Container
      animate={{ right: '10px' }}
      transition={{ type: 'spring', bounce: 0.6 }}
    >
      <HeaderIcon><Settings fill='white' /></HeaderIcon>
      <h3>Settings</h3>
      <Content>
        <Link to='/billing/profile'><Person pointer /> <p>Profile</p></Link>
        <li onClick={signOut}><SignOut pointer /> <p>Sign out</p></li>
      </Content>
    </Container>
  );
};
