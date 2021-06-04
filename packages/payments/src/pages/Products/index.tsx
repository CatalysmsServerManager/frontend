import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ButtonContainer, Container } from './style';
import { httpService } from 'services';
import { Button, Loading } from '@csmm/ui';
import { ProductList } from 'views';
import { useSnackbar } from 'notistack';
import * as Sentry from '@sentry/react';
import { AiOutlineShoppingCart as ShoppingCart } from 'react-icons/ai';

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
      else {
        enqueueSnackbar('Something went wrong selecting a product, please select again!', { variant: 'error' });
        setBuyLoading(false);
      }
      return;
    };
    Sentry.captureMessage('Something went wrong selectiong a product');
    enqueueSnackbar('Something went wrong selecting a product, please select again!', { variant: 'error' });
  }

  return (
    <>
      <Helmet>
        <title>CSMM | Products</title>
      </Helmet>
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
              <p>By clicking 'Buy plan' you agree with our
                <a href="https://csmm.app/terms-of-service" rel="noopener noreferrer" target="_blank"> terms of service</a>.
              </p>
              <Button
                icon={<ShoppingCart size={20} />}
                isLoading={buyLoading}
                onClick={buyProduct}
                size="large"
                text="Buy plan"
              />
            </ButtonContainer>
          </Fragment>
        }
      </Container >
    </>
  );
};
