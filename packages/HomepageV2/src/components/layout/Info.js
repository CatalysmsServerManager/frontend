import React from 'react'
import styled from 'styled-components'
import size from '../../constants/size'

import vr from '../../images/vr.svg'
import statistics from '../../images/statistics.svg'
import pin from '../../images/pin.svg'
import discordBot from '../../images/comment.svg'

const Container = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  height: 100%;
  margin: 50 0;

  @media ${size.lg}{
    margin: 100px 0;
    grid-template-columns: auto auto;
    grid-gap: 25px;
  }
  @media ${size.sm}{
    grid-template-columns: auto;
  }
`
const Block = styled.div`
  min-width: 25%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  img{
    width: 45px;
    height: auto;
  }
  h3{
    font-size: 1.1rem;
    margin: 25px 0;
    font-weight: 500;
  }
  p{
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  @media ${size.sm}{
    height: 200px;
  }
  @media ${size.xxs}{
    height: 250px;
  }
`

export default function Info(){
  return (
    <Container>
      <Block>
        <img alt="csmm ingame features icon" src={vr} title="7 Days to Die feature"/>
        <h3>Ingame features</h3>
        <p>Economy, teleports, custom commands, support tickets, server automation</p>
      </Block>
      <Block>
        <img alt="csmm statistics icon" src={statistics} title="7 Days to Die feature"/>
        <h3>Statistics</h3>
        <p>Economy, teleports, custom commands, support tickets, server automation</p>
      </Block>
      <Block>
        <img alt="csmm player tracking icon" src={pin} title="7 Days to Die feature"/>
        <h3>Player tracking</h3>
        <p>Catch cheaters and raiders like never before. Search for player, location and/or timeframe to find the data you need.</p>
      </Block>
      <Block>
        <img alt="csmm discord bot icon" src={discordBot} title="7 Days to Die feature"/>
        <h3>Discord bot</h3>
        <p>CSMM comes with a powerful Discord bot that lets you execute server commands from Discord, create a Discord channel and send notifications</p>
      </Block>
    </Container>
  )
}
