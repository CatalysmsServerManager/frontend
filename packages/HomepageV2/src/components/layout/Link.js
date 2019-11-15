import React from 'react'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.title};
  font-weight: 500;
`
export default function Link({ children, to }){
  return (
    <StyledLink to={to}>{children}</StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to:       PropTypes.string.isRequired
}
