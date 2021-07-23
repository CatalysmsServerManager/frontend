import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';
import { httpService } from '../../services';
import { Product } from '@prisma/client';
import { ProductItem } from './productItem';
import { useSnackbar } from 'notistack';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: .5
    }
  }
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InfoContainer = styled(motion.div)`
  width: 40%;
  border-radius: 15px;
  background-color: white;
  box-shadow: 1px 14px 15px -12px #00000023;
  min-height: calc(100% - 10px);
  padding: 50px 25px;

  &.hide{
    display: none;
  }

  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Divider = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

interface IProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductList: FC<IProps> = ({ loading, setLoading, selected, setSelected }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const sortOnPrice = (first: Product, second: Product) => first.price - second.price;

  async function getProducts() {
    const response = await httpService.get('/product');
    if (response.ok) {
      const products = await response.json() as Product[];
      if (products.length) {
        localStorage.setItem('productId', products[selected].id);
        // order products based on price
        setProducts(products.sort(sortOnPrice));
        setLoading(false);
        return;
      }
      enqueueSnackbar('Oops, something went wrong. We could not find any products 🥺.', { variant: 'info' });
      setLoading(false);
      return;
    }
    setLoading(false);
    enqueueSnackbar('Oops, something went wrong requesting the products 🥺.', { variant: 'info' });
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading || products.length === 0) return null;

  return (
    <Divider>
      <InfoContainer
        animate={{ opacity: 1 }}
        className={loading ? 'hide' : ''}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Information</h3>
        {products.map((product, index) => index === selected ? <p>{product.description}</p> : '')}
      </InfoContainer>
      <Container
        animate="show"
        initial="hidden"
        variants={container}
      >
        {
          products.map((product, index) => <ProductItem {...product} className={index === selected ? 'selected' : ''} index={index} key={product.id} setSelected={setSelected} />)
        }
      </Container>
    </Divider >
  );
};
