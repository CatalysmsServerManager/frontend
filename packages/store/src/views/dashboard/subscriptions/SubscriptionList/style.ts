import { styled } from '@csmm/ui';

export const animateItems = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'spring', bounce: 0.5, staggerChildren: 0.2 }
  }
};

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px;
  h4 {
    font-size: 1rem;
    width: calc(100% / 4);
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};

    &.center {
      text-align: center;
    }
  }
`;
