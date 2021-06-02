import { FC, useContext } from 'react';
import { motion } from 'framer-motion';
import icon from '../../images/csmm-icon.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Container, DiscordContainer, Nav, Button, AlertContainer } from './style';
import { routingService } from '../../services';
import { UserContext } from '../../context';
import { setRedirect } from '../../helpers';

import {
  AiOutlineControl as ControlPanel,
  AiOutlineAppstore as Dashboard,
  AiOutlineShoppingCart as ShoppingCart,
  AiOutlineBook as Book,
  AiOutlineFire as Connect
} from 'react-icons/ai';

export const Navbar: FC = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  function linkDiscord() {
    setRedirect(location.pathname);
    routingService.navigateExternal('/auth/discord');
  };

  return (
    <Container
      animate={{ width: 325 }}
      toTop={userData?.discordId ? true : false}
      transition={{ duration: 1, type: 'spring', bounce: 0.6 }}
    >
      <motion.img
        alt="CSMM icon"
        animate={{ rotate: 360 }}
        onClick={() => navigate('/billing/dashboard')}
        src={icon}
        transition={{ type: 'tween', duration: 1, repeatType: 'reverse', repeat: Infinity, ease: 'easeInOut', repeatDelay: 5 }}
      />
      <h2 onClick={() => navigate('/billing/dashboard')}>CSMM Billing</h2>
      <Nav>
        <NavLink to="/billing/dashboard"><Dashboard size={24} /><p>Dashboard</p></NavLink>
        <NavLink to="/billing/products"><ShoppingCart size={24} /><p>Product plans</p></NavLink>
        <a href="https://panel.csmm.fun" rel="noopener noreferrer" target="_blank"><ControlPanel size={24} /><p>Control panel</p></a>
        <a href="https://docs.csmm.app" rel="noopener noreferrer" target="_blank"><Book size={24} /><p>Documentation</p></a>
      </Nav>

      {
        !userData?.discordId
        &&
        <DiscordContainer
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <AlertContainer><Connect size={30} /></AlertContainer>
          <h4>Connect Discord</h4>
          <p>By connecting your discord you will receive a custom role in the official CSMM Discord server. </p>
          <Button onClick={linkDiscord}>Connect it daddy</Button>
        </DiscordContainer>
      }
    </Container>
  );
};
