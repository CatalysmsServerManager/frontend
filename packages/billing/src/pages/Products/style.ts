import { styled } from '@csmm/ui';

export const Container = styled.div`
  h2{
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 10px;
    text-align: center;
  }
  p{
    text-align: center;
    margin-bottom: 50px;
    font-weight:500;
    opacity: 0.7;
    color:${({ theme }) => theme.colors.secondary};
  }

  &.center{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-top-color: ${({ theme }) => theme.colors.secondary}15;
  border-top-width: 2px;
  border-top-style: solid;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    opacity: .5;
    margin-bottom: 0;
  }
  a {
    color: ${({ theme }): string => theme.colors.secondary};
    text-decoration: underline;
  }
`;
