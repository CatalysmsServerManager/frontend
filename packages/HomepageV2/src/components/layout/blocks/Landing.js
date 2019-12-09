import React from 'react'
import styled from 'styled-components'
import size from '../../../constants/size'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import iconBlack from '../../../images/icon-black.svg'
import Window from '../Window'

import landing1 from '../../../images/landing-1.png'
import landing2 from '../../../images/landing-2.png'
import landing3 from '../../../images/landing-3.png'

const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${size.xl}{
    width: 90%;
  }
  @media ${size.lg}{
    flex-direction: column;
    height: auto;
  }
`

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.main};
    font-weight: 500;
  }
  p{
    text-align: left;
    width: 60%;
  }
  @media ${size.lg}{
    height: calc(100vh - 100px);
    width: 100%;
    align-items: center;
    text-align: center;

    h1{
      font-size: 2rem;
    }
    p{
      font-size: 1.2rem;
      width: 80%;
      text-align: center;
    }
  }

  @media ${size.xs}{
    h1{font-size: 1.5rem;}
    p{ font-size: 1rem;}
  }
`

const BackgroundIcon = styled.img`
  position: absolute;
  width: 500px;
  opacity: 0.04;
  z-index: -1;

  @media ${size.xl}{
    width: 400px;
  }
  @media ${size.lg}{
    width: 600px;
  }
  @media ${size.sm}{
    width: 400px;
  }
  @media ${size.xs}{
    width: 300px;
  }
  @media ${size.xxs}{
    width: 250px;
  }
`

const Block = styled.div`
  max-height: 100%;

  img{
    height: 100%;
  }
`

export default function Landing(){
  return (
    <Container>
      <TextContainer>
        <h1>The best 7 days to Die server manager.</h1>
        <p>CSMM is a web based server manager for 7 Days to die. Bring your server(s) to the next level with csmms advanced features! Join <strong>hundreds</strong> of other servers in a new generation of server management.</p>
        <BackgroundIcon alt="csmm - 7 Days to Die Server Monitor icon" src={iconBlack} title="7 Days to Die Server Monitor icon"/>
      </TextContainer>
      <Window>
        <Carousel>
          <Block>
            <img alt="landing-1" src={landing1}/>
          </Block>
          <Block>
            <img alt="landing-2" src={landing2}/>
          </Block>
          <Block>
            <img alt="landing-2" src={landing3}/>
          </Block>
        </Carousel>
      </Window>
    </Container>
  )
}
