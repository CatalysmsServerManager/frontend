import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import size from '../../constants/size'
import { darken } from 'polished'

import StatusCircle from './StatusCircle'
import Link from './Link'

const Container = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.main};
  z-index: 1;

  @media ${size.md}{
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ isOpen }) => isOpen ? '100vh' : 0};
    transition: height .3s ease-out;
    overflow: hidden;
  }
`
const Nav = styled.nav`
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 a{
   margin-bottom: 10px;
   margin-top: 10px;
   color: white;
   font-size: 1.3rem;

   &:hover{
     color: ${darken(0.05, '#FFFFFF')};
   }
 }
`
export default function MobileNav({ isOpen }){
  return (
    <Container isOpen={isOpen}>
      <Nav>
        <Link isExternal to="https://status.csmm.app"> <StatusCircle coloredBackground={true}/> Status</Link>
        <Link isExternal to="https://www.patreon.com/bePatron?c=1523282">Premium</Link>
        <Link to="/termsofservice">Terms of service</Link>
        <Link isExternal to="https://docs.csmm.app/">Documentation</Link>
        <Link isExternal to="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager">Source code</Link>
      </Nav>
    </Container>
  )
}
MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired
}
