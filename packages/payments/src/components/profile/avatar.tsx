import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../context';
import { getInitials } from '../../helpers';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.p};
`;

export const Avatar: FC = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  if (!userData) {
    navigate('/');
  }

  return (
    <Container>
      {getInitials(userData?.firstName ? userData.firstName : 'unknown', userData?.lastName ? userData.lastName : 'unknown')}
    </Container>
  );
};
