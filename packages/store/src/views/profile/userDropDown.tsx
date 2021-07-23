import { FC } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLogout as SignOut, AiOutlineUser as User, AiOutlineSetting as Settings } from 'react-icons/ai';
import { useAuth } from 'hooks';
import { useSnackbar } from 'notistack';

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
    color: ${({ theme }) => theme.colors.secondary};
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
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Content = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
    fill: ${({ theme }): string => theme.colors.primary};
  }

  li,a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px 0;
    color: ${({ theme }): string => theme.colors.secondary};
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
  const { signOut } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  async function handleSignOut() {
    if (!await signOut()) {
      enqueueSnackbar('An error occurred while trying to sign out.', { variant: 'error' });
    } else {
      navigate('/');
    }
  }

  return (
    <Container
      animate={{ right: '10px' }}
      transition={{ type: 'spring', bounce: 0.6 }}
    >
      <HeaderIcon><Settings fill="white" size={24} /></HeaderIcon>
      <h3>Settings</h3>
      <Content>
        <Link to="/Store/profile"><User size={24} /> <p>Profile</p></Link>
        <li onClick={handleSignOut}><SignOut size={24} /> <p>Sign out</p></li>
      </Content>
    </Container>
  );
};
