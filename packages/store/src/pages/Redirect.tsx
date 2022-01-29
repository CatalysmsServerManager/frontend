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
  //const location = useLocation();

  function redirect() {
    const path = localStorage.getItem('redirect');
    if (!path) {
      navigate('/store/dashboard');
      return;
    }
    localStorage.removeItem('redirect');
    navigate(path);
  }

  useEffect(() => {
    redirect();
  }, []);

  return (
    <Container>
      <h1>Redirecting...</h1>
    </Container>
  );
};
