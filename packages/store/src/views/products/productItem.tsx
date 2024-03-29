import { FC } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@csmm/ui';
import currency from 'currency.js';
import { AiOutlineCheck as CheckMark } from 'react-icons/ai';

const item = {
  hidden: { opacity: 0, x: 25 },
  show: { opacity: 1, x: 0 }
};

const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 5px;
  }
`;

export const Container = styled(motion.li)`
  border-radius: 15px;
  background-color: white;
  width: 450px;
  height: 100px;
  box-shadow: 1px 14px 15px -12px #00000023;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: background-color .2s ease-in-out, transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;

   &:hover {
    transform: translateY(-5px);
  }

  &.selected {
    color: white;
    background-color:${({ theme }) => theme.colors.primary};
    border-color:${({ theme }) => theme.colors.primary};

    div, h3 {
      color: white;
    }
  }
`;

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  className: string;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

export const CheckMarkContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }): string => theme.colors.primary};
  }

  &.selected {
    color: white;
    border-color: white;
    background-color: white;
  }
`;

const Name = styled.div`
  font-weight: 600;
  width: 40%;
  font-size: 1.125rem;
`;

export const ProductItem: FC<IProduct> = ({ index, id, name, price, className, setSelected }) => {
  function selectProduct() {
    localStorage.setItem('productId', id);
    setSelected(index);
  }

  return (
    <Container
      className={className}
      onClick={selectProduct}
      variants={item}
    >
      <CheckMarkContainer className={className}>
        {className === 'selected' ? <CheckMark size={24} /> : null}
      </CheckMarkContainer>
      <Name>{name}</Name>
      <PriceContainer><h3>{currency(price, { fromCents: true, precision: 2, symbol: '€' }).format()}</h3> / Month </PriceContainer>
    </Container>
  );
};
