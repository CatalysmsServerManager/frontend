import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../layout/Header'
import Landing from '../layout/blocks/Landing'
import Pricing from '../layout/blocks/Pricing'
import Info from '../layout/Info'
import Footer from '../layout/Footer'

const Body = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default function Home(){
  return (
    <Fragment>
      <Header/>
      <Body>
        <Landing/>
        <Info/>
        <Pricing/>
      </Body>
      <Footer/>
    </Fragment>
  )
}
