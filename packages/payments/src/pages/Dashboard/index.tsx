import { FC, Fragment } from 'react';
import { GridContainer, Hello, TileContainer } from './style';
import { Helmet } from 'react-helmet';
import { DeployTile, SubscriptionList, PaymentStateTile } from 'views';
import { getTOD } from 'helpers';
import { useUser } from 'hooks';

export const Dashboard: FC = () => {
  const { userData } = useUser();
  return (
    <Fragment>
      <Helmet>
        <title>CSMM | Dashboard</title>
      </Helmet>
      <Hello>
        <h2> {getTOD()}, <span>{userData.firstName}</span></h2>
        <p>We hope you are having a great day!</p>
      </Hello>
      <GridContainer>
        <SubscriptionList />
        <TileContainer>
          <PaymentStateTile />
          <DeployTile />
        </TileContainer>
      </GridContainer>
    </Fragment>
  );
};
