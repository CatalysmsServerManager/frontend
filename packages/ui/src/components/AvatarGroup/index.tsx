import { FC, ReactNode } from 'react';
import { styled } from 'styled';
import { Avatar, AvatarProps } from 'components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    :first-child{
      margin-left: 0;
    }
    margin-left:-10px;
  }
`;

export interface AvatarGroupProps {
  /* Max amount of avatars that should be shown */
  max?: number;
  children: ReactNode[]
}

export const AvatarGroup: FC<AvatarGroupProps> = ({ max = 3, children }) => {
  if (!children.length) {
    return <Container></Container>;
  }

  function getFirstThree() {
    const elements = [];
    for (let i = 0; i < children.length && i < 3; i++) {
      elements.push(children[i]);
    }
    return elements;
  }

  function getExtra() {
    if (children.length - max > 0) {
      const firstChild = children[0] as any;
      const { size } = firstChild.props as AvatarProps;
      return <Avatar alt="extra" size={size}>{children.length - max}+</Avatar>;
    }
  }

  return (
    <Container>
      {getFirstThree()}
      {getExtra()}
    </Container>
  );
};