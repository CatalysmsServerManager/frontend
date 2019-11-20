import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import size from '../../constants/size'
import { lighten } from 'polished'

import icon from '../../images/icon.svg'
import Link from '../layout/Link'
import Button from '../layout/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 300px;
  border: 5px solid ${({ theme, isPopular }) => isPopular ? lighten(0.65, theme.title) : theme.shade};
  border-radius: 20px;

  @media ${size.xxs}{
    width: 260px;
  }

`
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  padding-top: 25px;
  img {
    width: 21px;
    height: 21px;
    margin-right: 15px;
  }
  h2{
    font-weight: 600;
  }
`
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 130px;
  background-color: ${({ theme, isPopular }) => isPopular ? theme.title : theme.shade};
  .symbol{
      position: relative;
      width: 40px;
      height: 40px;
      span{
        position: absolute;
        top: -20px;
        left: 10px;
        color: ${({ theme, isPopular }) => isPopular ? 'white' : theme.main};
        font-size: 1.5rem;
        font-weight: 400;
      }
  }
  .price{
    position: relative;
    color: ${({ theme, isPopular }) => isPopular ? 'white' : theme.main};
    font-size: 3.5rem;
    font-weight: 600;
    }
  .month{
    font-size: 1.4rem;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    color: ${({ theme, isPopular }) => isPopular ? 'white' : theme.text};
  }
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100% - 215px);
  width: 100%;
  p{
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }
  button{
    margin-top: 25px;
    font-size: 110%;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
  button{
    font-size: 110%;
  }
  a{
    color: white;
    &:hover{
      color: white;
    }
  }
`

export default function Plan({ name, price, servers, commands, jobs, notifications, teleports, location, inventory, analytics, isPopular = false }){
  return (
    <Container isPopular={isPopular}>
      <Name><img alt="csmm 7 Days to Die icon" src={icon} title="7 Days to Die Server Monitor"/><h2>{name}</h2></Name>
      <Price isPopular={isPopular}>
        <div className="symbol">
          <span>€</span>
        </div>
        <div className="price">{price}</div>
        <p className="month"> / month</p>
      </Price>
      <Details>
        <p>max servers: {servers}</p>
        <p>max custom commands: {commands}</p>
        <p>max cron jobs: {jobs}</p>
        <p>max custom notifications: {notifications}</p>
        <p>max teleport locations: {teleports}</p>
        <p>location tracking data kept {location}</p>
        <p>inventory tracking data kept for {inventory}</p>
        <p>Analytics data kept for {analytics}</p>
      </Details>
      <ButtonContainer>
        <Button alt role="link"><Link isExternal to="https://www.patreon.com/bePatron?c=1523282">Try it now!</Link></Button>
      </ButtonContainer>
    </Container>
  )
}

Plan.propTypes = {
  analytics:     PropTypes.string.isRequired,
  commands:      PropTypes.string.isRequired,
  inventory:     PropTypes.string.isRequired,
  isPopular:     PropTypes.bool,
  jobs:          PropTypes.string.isRequired,
  location:      PropTypes.string.isRequired,
  name:          PropTypes.string.isRequired,
  notifications: PropTypes.string.isRequired,
  price:         PropTypes.string.isRequired,
  servers:       PropTypes.string.isRequired,
  teleports:     PropTypes.string.isRequired
}
