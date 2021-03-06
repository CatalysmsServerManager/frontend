import { FC } from 'react';
import { motion } from 'framer-motion';
import icon from '../../images/csmm-icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav } from './style';
import { ConnectDiscord } from './ConnectDiscord';
import {
  AiOutlineControl as ControlPanel,
  AiOutlineAppstore as Dashboard,
  AiOutlineShoppingCart as ShoppingCart,
  AiOutlineBook as Book,
} from 'react-icons/ai';
import { useUser } from 'hooks';

export const Navbar: FC = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  return (
    <Container
      animate={{ width: 325 }}
      toTop={userData.discordId ? true : false}
      transition={{ duration: 1, type: 'spring', bounce: 0.6 }}
    >
      <motion.img
        alt="CSMM icon"
        animate={{ rotate: 360 }}
        onClick={() => navigate('/store/dashboard')}
        src={icon}
        transition={{ type: 'tween', duration: 1, repeatType: 'reverse', repeat: Infinity, ease: 'easeInOut', repeatDelay: 5 }}
      />
      <h2 onClick={() => navigate('/store/dashboard')}>CSMM Store</h2>
      <Nav>
        <NavLink to="/store/dashboard"><Dashboard size={24} /><p>Dashboard</p></NavLink>
        <NavLink to="/store/products"><ShoppingCart size={24} /><p>Product plans</p></NavLink>
        <a href="https://panel.csmm.fun" rel="noopener noreferrer" target="_blank"><ControlPanel size={24} /><p>Control panel</p></a>
        <a href="https://docs.csmm.app" rel="noopener noreferrer" target="_blank"><Book size={24} /><p>Documentation</p></a>
      </Nav>
      {
        !userData.discordId
        &&
        <ConnectDiscord />
      }
    </Container>
  );
};
