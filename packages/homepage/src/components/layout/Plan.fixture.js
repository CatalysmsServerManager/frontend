import React from 'react'
import Plan from './Plan'
import planData from '../../constants/plandata'

export default {
  normal:   <Plan {...planData[0]}/>,
  popular:  <Plan isPopular {...planData[3]}/>
}
