import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header, Navbar } from '../components';
import { useAuth, useUser } from 'hooks';

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color:#e8edf5;
`;

const ContentContainer = styled(motion.div)`
  background-color:#e8edf5;
  width: 100%;
  opacity: 0;
  overflow-y: auto;
`;
const Page = styled.div`
  padding: 30px 80px;
`;

export const Frame: FC = () => {
  // check if the user has already filled in an email address (initial).
  const { getSession } = useAuth();
  const { userData, setUserData } = useUser();
  const navigate = useNavigate();

  async function handleOnBoarding() {
    if (!userData.email) {
      const session = await getSession();
      if (session && session.email) {
        setUserData(session);
      } else {
        navigate('/onboarding');
      }
    }
  }

  useEffect(() => {
    handleOnBoarding();
  }, []);

  return (
    <Container>
      <Navbar />
      <ContentContainer
        animate={{ opacity: 1 }}
        transition={{ delay: .3, duration: .5 }}
      >
        <Header />
        <Page>
          <Outlet />
        </Page>
      </ContentContainer>
    </Container>
  );
};
