import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { httpService } from '../services';
import { Loading, Button, ProductList } from '../components';
import { useSnackbar } from 'notistack';
import * as Sentry from '@sentry/react';

const Container = styled.div`
  h2{
    font-size: 3.5rem;
    color: ${({ theme }) => theme.s};
    font-weight:800;
    margin-bottom: 10px;
    text-align: center;
  }
  p{
    text-align: center;
    margin-bottom: 50px;
    font-weight:500;
    opacity: 0.7;
    font-size: 1.2rem;
    color:${({ theme }) => theme.s};
  }

  &.center{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-top-color: ${({ theme }) => theme.s}15;
  border-top-width: 2px;
  border-top-style: solid;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    opacity: .5;
    margin-bottom: 0;
    font-size: .9rem;
  }
  a {
    color: ${({ theme }): string => theme.s};
    text-decoration: underline;
  }
`;

export const Products: React.FC = () => {
  const [selected, setSelected] = useState(2);
  const [loading, setLoading] = useState(true);
  const [buyLoading, setBuyLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  async function buyProduct() {
    setBuyLoading(true);
    const productId = localStorage.getItem('productId');
    if (productId) {
      const response = await httpService.post('/product/buy', { productId: productId });
      if (response.ok) {
        const json = await response.json();
        window.open(json.url, 'window name');
      }
      return;
    };
    Sentry.captureMessage('Something went wrong selectiong a product');
    enqueueSnackbar('Something went wrong selecting a product, please select again!', { variant: 'error' });
  }

  return (
    <Container className={loading ? 'center' : ''}>
      <h2>Product plans</h2>
      <p>Enjoy gaming! Possible surprise fees.</p>

      <ProductList
        loading={loading}
        selected={selected}
        setLoading={setLoading} setSelected={setSelected} />

      {loading ?
        <Loading />
        :
        <Fragment>
          <ButtonContainer>
            <p>By clicking 'Buy plan' you agree with our <a href='https://csmm.app/terms-of-service' rel='noopener noreferrer' target='_blank'>terms of service</a></p>
            <Button isLoading={buyLoading} onClick={buyProduct}>Buy plan</Button>
          </ButtonContainer>
        </Fragment>
      }
    </Container >
  );
};
