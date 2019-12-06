import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import size from '../../constants/size'

const Container = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 2;

  @media ${size.md}{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    width: 50%;
    svg{
      width: 25px;
      height: 25px;
      g{
        transition: fill .3s ease-in-out;
      }
    }
  }
  @media ${size.xxs}{
    padding-right: 50px;
  }
`

export default function Hamburger({ isOpen, toggleOpen }){
  return (
    <Container onClick={() => toggleOpen(!isOpen)}>
      <svg
        version="1.1" viewBox="0 0 469.333 469.333"
        x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <g fill={isOpen ? '#FFFFFF' : '#28B766'}>
          <path
            d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
          S23.917,106.667,53.333,106.667z"/>
          <path d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333S445.417,181.333,416,181.333z"/>
          <path
            d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
          c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z"/>
        </g>
      </svg>
    </Container>
  )
}

Hamburger.propTypes = {
  isOpen:     PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}
