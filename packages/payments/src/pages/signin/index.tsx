import { FC, useState, useRef } from 'react';
import { authenticationService, routingService } from '../../services';
import { Discord, Github, Mail, Steam } from '../../icons';
import icon from '../../images/csmm-icon.svg';
import { Button } from '../../components';
import { AbsoluteIcon, Icon, Container, ContentContainer, Left, Right, SocialContainer, Title } from './style';
import { useNavigate } from 'react-router-dom';

export const Signin: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [c1, setC1] = useState<string>('Hello');
  const [c2, setC2] = useState<string>('There.');
  const constraintsRef = useRef(null);
  const navigate = useNavigate();

  async function signIn() {
    setLoading(true);
    // check if the user already has a session (is already signed in)
    const hasSession = await authenticationService.hasServerSession();
    if (hasSession) {
      navigate('/billing/dashboard');
      return;
    }
    routingService.navigateExternal('/auth/steam');
  }

  function onTap() {
    setCount(count + 1);

    if (count === 4) {
      setC1('General');
      setC2('Kenobi.');
    }
    if (count === 15) {
      setC1('Stop');
      setC2('it now.');
    }
    if (count === 30) {
      setC1('Drag');
      setC2('The icon.');
    }
  }

  return (
    <Container>
      <Left
        animate={{ width: '40%' }}
        transition={{ duration: 1, type: 'spring', bounce: 0.6 }}
      >
        <Title
          id='title'
          onTap={onTap}
          whileTap={{ scale: 0.95 }}
        >{c1} <br /> {c2}</Title>
      </Left>
      <Right
        animate={{ opacity: 1 }}
        ref={constraintsRef}
        transition={{ delay: .7, duration: .5 }}
        url={icon}
      >
        <AbsoluteIcon alt='csmm icon' src={icon} />
        <header>
          <Icon
            alt='csmm icon'
            animate={{ rotate: 360 }}
            drag
            dragConstraints={constraintsRef}
            src={icon}
            transition={{ type: 'spring', duration: 5, repeat: Infinity, bounce: .5 }}
          />
          <h2>CSMM Billing</h2>
        </header>
        <ContentContainer>
          <p className='text'>Setting up a server<br /> is now just a few <strong>clicks</strong> away!</p>
          <Button
            icon={<Steam />}
            isLoading={loading}
            onClick={signIn}>Sign in</Button>
        </ContentContainer>
        <SocialContainer>
          <a href='https://discord.com/invite/EwyDdNA' rel='noreferrer noopener' target='_blank'> <Discord outline={false} pointer /></a>
          <a href='mailto:info@csmm.app' rel='noreferrer noopener' target='_blank'><Mail pointer /></a>
          <a href='https://github.com/CatalysmsServerManager/7-days-to-die-server-manager' rel='noreferrer noopener' target='_blank'><Github pointer /></a>
        </SocialContainer>
      </Right>
    </Container >
  );
};
