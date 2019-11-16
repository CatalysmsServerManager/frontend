import React from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

const StyledLink = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.title};
  font-weight: 500;
  transition: color .1s ease-in-out;
  transition: transform .2s ease-in-out;

  &:hover{
    color: ${({ theme }) => lighten(0.2, theme.title)};
    transform: translateY(-3px);
  }
`
const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.title};
  font-weight: 500;
  transition: color .1s ease-in-out;
  transition: transform .2s ease-in-out;
  &:hover{
    color: ${({ theme }) => lighten(0.2, theme.title)};
    transform: translateY(-5px);
  }
`

export default function Link({ children, isExternal = false, to }){
  return isExternal ? <StyledLink to={to}>{children}</StyledLink> : <StyledAnchor href={to} rel="noopener noreferrer" target="_blank">{children}</StyledAnchor>
}

Link.propTypes = {
  children:   PropTypes.node.isRequired,
  isExternal: PropTypes.bool,
  to:         PropTypes.string.isRequired
}
