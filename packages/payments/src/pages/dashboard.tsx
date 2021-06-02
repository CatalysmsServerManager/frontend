import { FC, Fragment, useContext } from 'react';
import { styled } from '@csmm/ui';
import { Helmet } from 'react-helmet';
import { PaymentStateCard, SubscriptionList, DeployCard } from '../components';
import { UserContext } from '../context';
import { getTOD } from '../helpers';

const Hello = styled.div`
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

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const CardContainer = styled.div`
  display: flex;
  width: fit-content;
  height: calc(fit-content,'100px');
  flex-direction: column;
  justify-content: space-between;
`;

export const Dashboard: FC = () => {
  const { userData } = useContext(UserContext);
  return (
    <Fragment>
      <Helmet>
        <title>CSMM - Homepage</title>
      </Helmet>
      <Hello>
        <h2> {getTOD()}, <span>{userData?.firstName}</span></h2>
        <p>We hope you are having a great day!</p>
      </Hello>
      <GridContainer>
        <SubscriptionList />
        <CardContainer>
          <PaymentStateCard />
          <DeployCard />
        </CardContainer>
      </GridContainer>
    </Fragment>
  );
};
