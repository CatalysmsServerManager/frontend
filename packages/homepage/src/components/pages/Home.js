import React, { Fragment } from 'react'
import styled from 'styled-components'
import size from '../../constants/size'

import Header from '../layout/Header'
import Landing from '../layout/blocks/Landing'
import Feature from '../layout/blocks/Feature'
import Pricing from '../layout/blocks/Pricing'
import Server from '../layout/blocks/Server'
import Info from '../layout/Info'
import Footer from '../layout/Footer'

const Body = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${size.xs}{
    width: 90%;
  }
`

export default function Home(){
  return (
    <Fragment>
      <Header/>
      <Landing/>
      <Body>
        <Info/>
        <Feature/>
        <Pricing/>
        <Server/>
      </Body>
      <Footer/>
    </Fragment>
  )
}
