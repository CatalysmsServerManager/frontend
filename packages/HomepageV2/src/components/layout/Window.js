import React from 'react'
import styled, { keyframes } from 'styled-components'
import size from '../../constants/size'

const dotAnimation = keyframes`
  0% {
    background-color: #28b766;
  }

  25%{
    background-color: #28b766;
  }

  50%{
    background-color: #3a4763;
  }
  75%{
    background-color: #28b766;
  }
  100%{
    background-color: #28b766;
  }

`

const Container = styled.div`
  width: 600px;
  height: 450px;
  background-color: ${({ theme }) => theme.shade};
  border-radius: 10px;
  padding: 0 25px calc(25px + 15px) 25px;

  @media ${size.xl}{
    width: 500px;
  }
  @media ${size.lg}{
    width: 80%;
    margin-bottom: 50px;
  }

  @media ${size.sm}{
    width: 100%;
  }
`

const Dot = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  transition: .2s background-color ease-in-out;
  background-color: ${({ theme }) => theme.main};

  &.first{
    animation: 3s ${dotAnimation} infinite;
  }
  &.second{
    animation: 3s ${dotAnimation} infinite;
    animation-delay: 1s;
  }
  &.third{
    animation: 3s ${dotAnimation} infinite;
    animation-delay: 2s;
  }
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`

export default function Window(){
  return (
    <Container>
      <Dot className="first"/>
      <Dot className="second"/>
      <Dot className="third"/>
      <Inner/>
    </Container>
  )
}
