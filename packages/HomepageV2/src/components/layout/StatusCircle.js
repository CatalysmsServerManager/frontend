import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Circle = styled.div`
  display: inline-block;
  margin-right: 5px;
  width: 5px;
  height: 5px;
  border: 3px solid ${({ color }) => color};
  border-radius: 50%;
`

export default function StatusCircle(){
  // #000 = unkown as it is not fetched yet
  const [ss, setServerState] = useState('#000000')

  useEffect(() => {
    showState()
  }, [])

  async function showState({ coloredBackground = false }){
    const urls = ['https://us.csmm.app/api/stats','https://eu.csmm.app/api/stats','https://au.csmm.app/api/stats']
    let serversUp = 0
    for (let i=0; i<urls.length; i++){
      const data = await fetch(urls[i])
      const json = await data.json()
      serversUp += json.length // max return value is 150 (50 per region)
    }
    switch(serversUp){
      case serversUp > 125:
        coloredBackground ? setServerState('#FFFFFF') : setServerState('#28B766')
        break;
      case serversUp < 125 && serversUp > 100:
        setServerState('#FF4500')
        break;
      case serversUp < 100:
        setServerState('#DC143C')
        break;
    }
  }
  return (
    <Circle color={ss}/>
  )
}

StatusCircle.propTypes = {
  coloredBackground: PropTypes.bool
}