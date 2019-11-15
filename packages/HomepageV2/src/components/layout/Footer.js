import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import discord from '../../images/discord.svg'
import mail from '../../images/mail.svg'

const Container = styled.footer`
  width: 100%;
  height: 145px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 50px;
  color: ${({ theme }) => theme.text};
`
const IconNav = styled.nav`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img{
    width: 30px;
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
        <img alt="dit nog aanpassen" src={discord}/>
        <img alt="dit nog aanpassen" src={mail}/>
      </IconNav>
      <div style={{ width: '33%' }}>
        <p>Copyright csmm © {new Date().getFullYear()} | All rights reserved</p>
      </div>
      <LinkNav>
        <Link to="/terms">Terms of service</Link>
        <Link isExternal to="https://docs.csmm.app/">Documentation</Link>
        <Link isExternal to="https://github.com/CatalysmsServerManager/7-days-to-die-server-manager">Source code</Link>
      </LinkNav>
    </Container>
  )
}
