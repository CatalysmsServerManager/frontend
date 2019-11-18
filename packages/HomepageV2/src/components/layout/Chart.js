import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import styled from 'styled-components'

export default function Chart({ data }){
  return (
    <ResponsiveLine

      axisLeft={{
        orient:         'left',
        legend:         'servers',
        legendOffset:   30,
        legendPosition: 'middle'
      }}
      axisRight={{
        orient:         'right',
        legend:         'players',
        legendOffset:   30,
        legendPosition: 'middle'
      }}
      colors={['#000','#FF99FF']}
      curve="natural"
      data={data}
      enableGridX={false}
      enableGridY={false}
      useMesh
      xScale={{ type: 'point' }}
      />
  )
}
Chart.propTypes = {
  data: PropTypes.array.isRequired
}
