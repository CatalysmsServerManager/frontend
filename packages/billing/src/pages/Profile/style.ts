import { styled } from '@csmm/ui';

export const Container = styled.div`
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10rem;
`;
export const Name = styled.h2`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 5rem;
  text-transform: capitalize;
`;
