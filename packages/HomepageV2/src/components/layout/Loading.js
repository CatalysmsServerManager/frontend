import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import icon from '../../images/icon.svg'

const Container = styled(motion.div)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  img{
    width: ${({ width }) => width}px;
    height: auto;
  }
`

export default function Loading({ width = 50, height = 50 }){
  return (
    <Container
      animate={{
        scale:  [1,1.5,1.5,1,1],
        rotate: [0, 0, 270, 270, 0]
      }}
      height={height}
      transition={{
        duration:     2,
        ease:         'easeInOut',
        times:        [0, 0.2, 0.5, 0.8, 1],
        loop:         Infinity,
        repeatDelay:  1
      }}
      width={width}>
      <img alt="Icon csmm" src={icon}/>
    </Container>
  )
}

Loading.propTypes = {
  height: PropTypes.number,
  width:  PropTypes.number
}
