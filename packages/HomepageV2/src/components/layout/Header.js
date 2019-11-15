import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Button from './Button'
import icon from '../../images/icon.svg'

const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 18px 11px -17px rgba(0,0,0,0.16);
`
const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  font-weight: 500;
  width: 60%;
  padding-left: 150px;
  img{
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  padding-right: 50px;
`

export default function Header(){
  return (
    <Container>
      <Name><img alt="change me later" src={icon}/><h2>csmm</h2></Name>
      <Nav>
        <Link to="/status">Status</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Button>Premium</Button>
      </Nav>
    </Container>
  )
}
