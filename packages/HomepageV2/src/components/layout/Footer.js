import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import Link from './Link'
import discord from '../../images/discord.svg'
import mail from '../../images/mail.svg'

const Container = styled.footer`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.text};
  background-color: #fafafa;
`
const IconNav = styled.nav`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }
`
const LinkNav = styled.nav`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    margin-left: 10px;
    margin-right: 10px;
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
      <div style={{ width: '33%' }}>
        <p style={{ textAlign: 'center' }}>Copyright <strong>csmm</strong> © {new Date().getFullYear()} | All rights reserved</p>
      </div>
      <LinkNav>
        <Link to="/termsofservice">Terms of service</Link>
        <Link isExternal to="https://docs.csmm.app/">Documentation</Link>
        <Link isExternal to="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager">Source code</Link>
      </LinkNav>
    </Container>
  )
}
