import { styled } from '@csmm/ui';

export const Hello = styled.div`
  width: 100%;
  padding-bottom: 40px;

  h2 {
    font-weight: 800;
    margin-bottom: 5px;
    span {
      font-size: 3rem;
      font-weight: 800;
      text-transform: capitalize;
    }
  }
  p{
    opacity: 0.5;
    font-weight: 500;
    margin-left: 5px;
    font-size: 1.5rem;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const TileContainer = styled.div`
  display: flex;
  width: fit-content;
  /* stylelint-disable */
  height: calc('fit-content' -'100px');
  flex-direction: column;
  justify-content: space-between;
`;
