import { FC, useState, createRef } from 'react';
import { styled, getInitials, useOutsideAlerter } from '@csmm/ui';
import { UserDropDown } from '../views/profile/userDropDown';
import { useUser } from 'hooks';

const Container = styled.header`
  height: 100px;
  padding: 25px 50px 0 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const User = styled.div`
  display:flex;
  align-items: center;
  cursor: pointer;
`;

const InitialsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 800;
  text-transform: uppercase;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: capitalize;
  }
  p {
    opacity: 0.5;
  }
`;

export const Header: FC = () => {
  const { userData } = useUser();
  const [showUserDropDown, setUserDropDownVisibility] = useState(false);
  const containerRef = createRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, (): void => {
    setUserDropDownVisibility(false);
  });

  return (
    <Container>
      <User onClick={() => setUserDropDownVisibility(!showUserDropDown)} ref={containerRef}>
        <InitialsBlock>
          {getInitials(userData.firstName ? userData.firstName : 'u', userData.lastName ? userData.lastName : 'u')}
        </InitialsBlock>
        <Name>
          <h4>{userData.firstName ? userData.firstName : 'unknown'} {userData.lastName ? userData.lastName : 'user'}</h4>
          <p>{userData.email ? userData.email : 'unknown email'}</p>
        </Name>
        {showUserDropDown && <UserDropDown />}
      </User>
    </Container>

  );
};
