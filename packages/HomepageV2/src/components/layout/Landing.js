import React from 'react'
import styled from 'styled-components'

import iconBlack from '../../images/icon-black.svg'

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 270px);
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.main};
    font-weight: 500;
  }
  p{
    text-align: center;
    width: 50%;
  }

  .icon{
    position: absolute;
    width: 250%;
    height: 250%;
    opacity: 0.05;
    z-index: -1;
  }
`
const Window = styled.div`
  width: 600px;
  height: 450px;
  background-color: ${({ theme }) => theme.shade};
  border-radius: 10px;
  padding: calc(25px - 15px) 25px calc(25px + 15px ) 25px;
  .circles {
    div{
      margin-left: 5px;
      margin-right: 5px;
      display: inline-block;
      width: 9px;
      height: 9px;
      background-color: ${({ theme }) => theme.main};
      border-radius: 50%;
    }
 }
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`

export default function Landing(){
  return (
    <Container>
      <TextContainer>
        <h1>The best 7 days to Die server manager.</h1>
        <p>CSMM gives admins unprecedent control over 7 Days to Die and insight into users 7 days to Die servers. because csmm for 7 days to Die is highly customizable. You can make your server.</p>
        <img alt="later nog aanpassen" className="icon" src={iconBlack}/>
      </TextContainer>
      <Window>
        <div className="circles"><div/><div/><div/></div>
        <Inner>

        </Inner>
      </Window>
    </Container>
  )
}
