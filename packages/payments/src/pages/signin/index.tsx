import { FC, useState, useRef } from 'react';
import icon from '../../images/csmm-icon.svg';
import { Button } from '@csmm/ui';
import { AbsoluteIcon, Icon, Container, ContentContainer, Left, Right, SocialContainer, Title } from './style';

import { FaDiscord as Discord, FaSteamSymbol as Steam } from 'react-icons/fa';
import { AiFillMail as Mail, AiFillGithub as Github } from 'react-icons/ai';
import { useAuth } from 'hooks';

export const Signin: FC = () => {
  const { signIn } = useAuth();
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [c1, setC1] = useState<string>('Hello');
  const [c2, setC2] = useState<string>('There.');
  const constraintsRef = useRef(null);

  async function handleSignIn() {
    setLoading(true);
    await signIn();
  }

  function onTap() {
    setCount(count + 1);
    switch (count) {
      case 4:
        setC1('General');
        setC2('Kenobi.');
        break;
      case 15:
        setC1('Stop');
        setC2('it now.');
        break;
      case 30:
        setC1('Drag');
        setC2('The icon.');
        break;
    }
  }

  return (
    <Container>
      <Left
        animate={{ width: '40%' }}
        transition={{ duration: 1, type: 'spring', bounce: 0.6 }}
      >
        <Title
          id="title"
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
        <AbsoluteIcon alt="csmm icon" src={icon} />
        <header>
          <Icon
            alt="csmm icon"
            animate={{ rotate: 360 }}
            drag
            dragConstraints={constraintsRef}
            src={icon}
            transition={{ type: 'spring', duration: 5, repeat: Infinity, bounce: .5 }}
          />
          <h2>CSMM Billing</h2>
        </header>
        <ContentContainer>
          <h3>Setting up a server<br /> is now just a few <strong>clicks</strong> away!</h3>
          <Button
            icon={<Steam size={24} />}
            isLoading={loading}
            onClick={handleSignIn}
            size="medium"
            text="Sign in"
          />
        </ContentContainer>
        <SocialContainer>
          <a
            href="https://discord.com/invite/EwyDdNA"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Discord size={22} />
          </a>
          <a
            href="mailto:info@csmm.app"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Github size={26} />
          </a>
        </SocialContainer>
      </Right>
    </Container >
  );
};
