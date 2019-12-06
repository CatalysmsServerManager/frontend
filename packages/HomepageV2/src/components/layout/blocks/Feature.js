import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import size from '../../../constants/size'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Container = styled.section`
  width: 100%;
  height: 800px;
  margin-top: 200px;
  margin-bottom: 200px;
  padding: 15px 0 0 0;
  background-color: ${({ theme }) => theme.shade};
  border-radius: 10px;
  h2 {
    font-size: 3rem;
  }
  @media ${size.md}{
    height: 1000px;
  }
  @media ${size.sm}{
    height: 1100px;
  }
  @media ${size.xs}{
    width: 100%;
    height: 1150px;
  }
  @media ${size.xxs}{
    display: none;
  }
`

const Circle = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.main };
  border-radius: 50%;
  margin: 0 10px;
  transition: background-color .3s ease-in-out;
  &:first-child{
    margin-left: 30px;
  }

  &:hover{
    &:first-child{
    background-color: ${({ theme }) => theme.title};
    }
  }
  @media ${size.md}{
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
`
const Inner = styled.div`
  width: calc(100% - 50px);
  margin-top: 5px;
  height: calc(100% - 50px);
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`
const DesktopContentContainer = styled.div`
  width: 80%;
  height: 80%;
  @media ${size.lg}{
    display: none;
  }
`
const MobileContentContainer = styled.div`
  display: none;
  width: 80%;
  height: 80%;
  @media ${size.lg}{
    display: block;
  }
  @media ${size.sm}{
    height: 90%;
  }
  @media ${size.xxs}{
    width: 90%;
    height: 95%;
  }
`

const StyledCarousel = styled(Carousel)`
  margin-top: 50px;
  background-color: white;
  height: 500px;

  .control-dots{
    margin-top: 50px;
    .dot{
      width: 12px;
      height: 12px;
      border: none;
      box-shadow: none;
      background-color: ${({ theme }) => theme.main };
      opacity: 1;
      &.selected{
        background-color: ${({ theme }) => theme.title};
      }
    }
  }
`
const Block = styled.div`
  height: 500px;
  grid-gap: 30px;
  width: 100%;
  padding-bottom: 100px;
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  @media ${size.lg}{
    margin-top: 50px;
    padding-bottom: 0;
  }
  @media ${size.md}{
    display: block;
    margin-top: 0;
    height: auto;
  }
`
const FeatureBlock = styled.div`
  text-align: left;
  h3{
    color: ${({ theme }) => theme.main};
    font-size: 1.1rem;
  }
  @media ${size.md}{
    margin-bottom: 25;
    margin-top: 25px;
  }
`

export default function Feature(){
  return (
    <Container>
      <Circle/>
      <Circle/>
      <Circle/>
      <Inner>
        <DesktopContentContainer>
          <h2>Features.</h2>
          <StyledCarousel autoPlay={true} infiniteLoop={true} interval={10000} showArrows={false} showStatus={false} showThumbs={false} >
            {
              featureData.map((featureData) => (
                <Block key={uuid()}>
                  {
                    featureData.map((feature, index) => (
                      <FeatureBlock key={`feature-${index}`}>
                        <h3>{feature[0]}</h3>
                        <p>{feature[1]}</p>
                      </FeatureBlock>
                    ))
                  }
                </Block>
              )
              )
            }
          </StyledCarousel>
        </DesktopContentContainer>
        <MobileContentContainer>
          <h2>features.</h2>
          <Block>
            {
              featureData[1].map((feature, index) => (
                <FeatureBlock key={`feature-mobile-${index}`}>
                  <h3>{feature[0]}</h3>
                  <p>{feature[1]}</p>
                </FeatureBlock>
              ))
            }
          </Block>
        </MobileContentContainer>
      </Inner>
    </Container>
  )
}

// featureblock data per block
const featureData = [
  [
    ['Web panel', 'Control all settings via a web panel. Manage settings and view server activity straight from your browser on any device.'],
    ['New currency', 'Users can use the new currency for teleports, item shop, and more!'],
    ['Global ban list', 'get notified or act automatically when known cheaters/griefers join your server.'],
    ['Server automation','run any command in any time interval you want. Timed server messages, automatic world saving, ...'],
    ['Discord notifications', 'built-in for common use cases. Ability to detect specific strings for your custom purposes.'],
    ['High ping kicker','Kick players with constant bad connection.']
  ],
  [
    ['Country ban','automatically kick or ban players from certain countries from your server.'],
    ['Player tracking','Track location and inventory of online players and view them on a map of your server.'],
    ['Ingame commands','Playermade teleports, ingame support system, ... Custom commands to expose console commands to players in a controlled way'],
    ['Economy system','Let players earn money by playing your 7 Days to Die Server by killing zombies and typing on your Discord server. They can spend their cash in your servers shop, teleports and more.'],
    ['Discord integration','Chat bridge (chat between Discord and your 7 Days to Die Server), multiple commands to view player info or view server status.'],
    ['Support ticket system','Let players create support requests ingame. Admins can view and comment on these via the website to provide quick support for players.']
  ],
  [
    ['Server analytics','charts of # of online players, server FPS, RAM usage.'],
    ['Permissions and roles','Give users special permission on the webpanel or ingame.'],
    ['Custom hooks','React to events (playerJoined, playerConnected, playerDisconnected, chatMessage, playerKilled, playerDeath, playerSuicide, playerLevel, zombieKilled, animalKilled or a custom search) on your server with any command(s) you want. ']
  ]
]
