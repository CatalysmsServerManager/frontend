import React from 'react'
import styled from 'styled-components'

import vr from '../../images/vr.svg'
import statistics from '../../images/statistics.svg'
import pin from '../../images/pin.svg'
import discordBot from '../../images/comment.svg'

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
`
const Block = styled.div`
  width: 25%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  img{
    width: 45px;
    height: auto;
  }
  h3{
    font-size: 1.2rem;
    margin: 25px 0;
  }
  p{
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`

export default function Info(){
  return (
    <Container>
      <Block>
        <img alt="later nog aanpassen" src={vr}/>
        <h3>Ingame features</h3>
        <p>Economy, teleports, custom commands, support tickets, server automation</p>
      </Block>
      <Block>
        <img alt="later nog aanpassen" src={statistics}/>
        <h3>Statistics</h3>
        <p>Economy, teleports, custom commands, support tickets, server automation</p>
      </Block>
      <Block>
        <img alt="later nog aanpassen" src={pin}/>
        <h3>Player tracking</h3>
        <p>Catch cheaters and raiders like never before. Search for player, location and/or timeframe to find the data you need.</p>
      </Block>
      <Block>
        <img alt="later nog aanpassen" src={discordBot}/>
        <h3>Discord bot</h3>
        <p>CSMM comes with a powerful Discord bot that lets you execute server commands from Discord, create a Discord channel and send notifications</p>
      </Block>
    </Container>
  )
}
