import { FC, useEffect } from 'react';
import { styled } from '@csmm/ui';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color:${({ theme }) => theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
  }
`;

export const Redirect: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const path = localStorage.getItem('redirect');
    if (path) {
      localStorage.removeItem('redirect');
      navigate(path);
      return;
    }
    // no redirect set so go back to landing
    navigate('/billing/dashboard');
  }, []);

  return (
    <Container>
      <h1>Redirecting...</h1>
    </Container>
  );
};
