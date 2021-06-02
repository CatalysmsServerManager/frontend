import { FC } from 'react';
import { Button, styled } from '@csmm/ui';
import { motion } from 'framer-motion';
import { routingService } from '../../services';
import { useLocation } from 'react-router-dom';
import { setRedirect } from '../../helpers';
import { AiOutlineFire as Connect } from 'react-icons/ai';

export const DiscordContainer = styled(motion.div)`
  position: relative;
  padding: 5.5rem 1.5rem 0 1.5rem;
  margin-top: auto;
  width: 100%;
  background-color: #e8edf5;
  height: 270px;
  opacity:0;
  border-radius: 1rem;

  h4 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    text-align: center;
  }
  p{
    opacity: .5;
    font-size: 95%;
    line-height: 170%;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: center;
  }
  button {
    margin: 0 auto;
  }

`;

const AlertContainer = styled.div`
  position: absolute;
  top: -25px;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: white;
  border: 10px solid ${({ theme }) => theme.colors.background};

  svg{
    fill: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const ConnectDiscord: FC = () => {
  const location = useLocation();

  function linkDiscord() {
    setRedirect(location.pathname);
    routingService.navigateExternal('/auth/discord');
  };

  return (
    <DiscordContainer
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <AlertContainer>
        <Connect size={30} />
      </AlertContainer>
      <h4>Connect Discord</h4>
      <p>By connecting your discord you will receive a custom role in the official CSMM Discord server. </p>
      <Button
        color="tertiary"
        isWhite
        onClick={linkDiscord}
        size="small"
        text="Connect it daddy!"
      />
    </DiscordContainer>
  );
};
