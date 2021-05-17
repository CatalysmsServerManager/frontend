import { FC, useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { size } from 'constants/size';
import { MobileNav } from './MobileNav';
import { Hamburger } from './Hamburger';
import { Link } from './Link';
import { Button } from './Button';
import { StatusCircle } from './StatusCircle';
import icon from 'images/icon.svg';

const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 18px 11px -17px rgba(0,0,0,0.16);

`;
const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  font-weight: 400;
  width: 50%;
  padding-left: 150px;
  img{
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
  @media ${size.xl}{
    padding-left: 150px;
    width: 30%;
  }
  @media ${size.lg}{
    padding-left: 100px;
    width: 25%;
    font-size: 1.2rem;
    img{
      width:25px;
      height: 25px;
      margin-right: 10px;
    }
  }
  @media ${size.md}{
    padding-left: 100px;
    width: 50%;
  }
  @media ${size.sm}{
    padding-left: 50px;
  }
  @media ${size.xxs}{
    padding-left: 25px;
  }

`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  padding-right: 150px;
  a{
    margin-left: 45px;
    margin-right: 45px;
  }
  button {
    a{
      color: white;
      &:hover{
        color: white;
      }
    }
  }
  @media ${size.xl}{
    width: 70%;
    padding-right: 50px;
    a{
      margin: 0 30px;
    }
  }
  @media ${size.xl}{
    width: 75%;
    a{
      margin: 0 20px;
    }
  }
  @media ${size.md}{
    display: none;
  }
`;
const OnPageLink = styled.div<{ to: string }>`
  color: ${({ theme }) => theme.title};
  font-weight: 500;
  transition: color .1s ease-in-out;
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => lighten(0.2, theme.title)};
  }
`;
export const Header: FC = () => {
  const [isOpen, toggleOpen] = useState(false);

  function scrollToPricing(e: any) {
    e.preventDefault();
    window.scrollTo({ top: document.getElementById('pricing')?.getBoundingClientRect().top, behavior: 'smooth' });
  }
  return (
    <Container>
      <Name><img alt="csmm 7 Days to Die Server Monitor Logo" src={icon} title="csmm 7 Days to Die Server Monitor logo" /><Link to="/"><h2>csmm</h2></Link></Name>
      <Nav>
        <Link isExternal to="https://status.csmm.app"> <StatusCircle /> Status</Link>
        <OnPageLink onClick={scrollToPricing} to="#pricing" >Pricing</OnPageLink>
        <Link to="/contact" >Contact</Link>
        <Link isExternal to="https://www.patreon.com/bePatron?c=1523282"><Button> Premium </Button></Link>
      </Nav>
      <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
      <MobileNav isOpen={isOpen} />
    </Container>
  );
};
