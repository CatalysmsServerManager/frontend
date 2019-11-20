import React from 'react'
import styled from 'styled-components'
import size from '../../constants/size'
import ReactTooltip from 'react-tooltip'

import Link from './Link'
import discord from '../../images/discord.svg'
import mail from '../../images/mail.svg'
import massief from '../../images/massief.svg'

const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 125px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  color: ${({ theme }) => theme.text};
  background-color: #fafafa;

  @media ${size.md}{
    height: 75px;
    padding: 25px 0;
    grid-template-columns: auto;
  }
`
const IconNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 25px;
    margin: 0 10px;
    @media ${size.md}{
      margin: 0 15px;
    }
  }
`

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    display: block;
  }
  @media ${size.lg}{
    flex-direction: column;
    .divider{
      display: none;
    }
  }
`

const Massief = styled.a`
  position: absolute;
  width: 25px;
  bottom: 5px;
  right: 0;
  left: 0;
  margin: 0 auto;
  .icon{
    width: 15px;
    height: auto;
  }
  @media ${size.md}{
    margin-left: auto;
    margin-right: 5px;
  }
`
const LinkNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${size.xl}{
    flex-direction: column;
    a{
      margin: 5px 0;
      font-size: 90%;
    }
  }
  @media ${size.md}{
    display: none;
  }
`
export default function Footer(){
  return (
    <Container>
      <IconNav>
        <Link isExternal to="/https://discordapp.com/invite/%45wy%44d%4E%41">
          <img alt="csmm 7 Days to Die discord icon" src={discord} title="csmm 7 Days to Die discord"/>
        </Link>
        <Link isExternal to="mailto:info@csmm.app">
          <img alt="csmm mail" data-tip="info@csmm.app" src={mail} title="csmm 7 Days to Die mail"/>
          <ReactTooltip effect="solid"/>
        </Link>
      </IconNav>
      <CopyrightContainer>
        <p>Copyright <strong>csmm</strong> © {new Date().getFullYear()} </p> <div className="divider">&nbsp;|&nbsp;</div><p>All rights reserved</p>
      </CopyrightContainer>
      <LinkNav>
        <Link to="/termsofservice">Terms of service</Link>
        <Link isExternal to="https://docs.csmm.app/">Documentation</Link>
        <Link isExternal to="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager">Source code</Link>
      </LinkNav>
      <Massief isExternal to="https://massief.biz/">
        <img alt="icon massief" className="icon" src={massief}/>
      </Massief>
    </Container>
  )
}
