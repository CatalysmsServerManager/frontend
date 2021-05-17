import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { size } from '../constants/size';
import { Header, Landing, Feature, Pricing, Server, Info, Footer } from 'components';

const Body = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${size.xs}{
    width: 90%;
  }
`;

export const Home: FC = () => {
  return (
    <Fragment>
      <Header />
      <Landing />
      <Body>
        <Info />
        <Feature />
        <Pricing />
        <Server />
      </Body>
      <Footer />
    </Fragment>
  );
};
