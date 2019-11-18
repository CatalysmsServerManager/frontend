import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Chart from '../Chart'

const Container = styled.section`
  margin: 150px 0;
  width: 80%;
  h2{
    font-size: 3rem;
  }
`


const Regions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  margin-bottom: 30px;
`
const Region = styled.div`
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    color: ${({theme}) => theme.main}
  }

  &.selected{
    color: ${({theme}) => theme.main };
    &:hover{
      color: ${({theme}) => darken(0.1,theme.main)};
    }
  }
`
const Inner = styled.div`
  width: 80%;
  margin-left: auto;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 10px;
`

export default function Server(){
  let dataset = {}
  const REGIONS = ['eu', 'us', 'au']
  const [chartData, setChartData] = useState({loading: true})

  useEffect(() => {


    // make eu the default selected region
    document.querySelector('.region').classList.add('selected')

    // calculate date 30 days ago
    let d = new Date()
    d.setMonth(d.getMonth()-1)
    // fetch data from different regions
    REGIONS.map( async (r) => dataset[r] = await getStats(d,r))
    getChartData()
  }, [])

  async function getChartData(){

    const regions = await getSelectedRegions()
    console.log(regions)

    if(regions.length>1){
      // optellen
    } else {
      let playerData = []
      let serverData = []
      console.log(dataset)
      dataset[regions[0]].map((regiondata) => {
        playerData.push({ 'x': regiondata.createdAt, 'y': regiondata.players})
        serverData.push({ 'x': regiondata.createdAt, 'y': regiondata.servers})
      })

      setChartData({
        data: [
          {'id': 'players', 'data': playerData, 'color': 'hsl(197, 70%, 50%)'},
          { 'id': 'servers', 'data': serverData, 'color': '#f47DA4'}
        ],
        loading: false
      })
    }
  }


  async function getStats(date,region){
    let res = await fetch(`https://${region}.csmm.app/api/stats?since=${date.valueOf()}`)
    let json = await res.json()
    let regionData = []
    json.map((day) => {
      regionData.push({players: day.players, servers: day.servers, date: day.createdAt})
    })
    return regionData
  }

  function setSelectRegion(e){
    const el = e.currentTarget
    el.classList.contains('selected') ? el.classList.remove('selected') : el.classList.add('selected')
    getChartData()
  }

  function getSelectedRegions(){
    let r = []
    const selectedRegions = document.querySelectorAll('.region.selected')
    for(let i=0;i<selectedRegions.length;i++){
      r.push(selectedRegions[i].dataset.region)
    }
    return r
  }


  return (
    <Container>
      <h2>Servers & Players.</h2>
      <Regions>
        {
          REGIONS.map((region) => <Region key={region} className="region" data-region={region} onClick={setSelectRegion}>{region}</Region>)
        }
      </Regions>
      <Inner>
        {
          chartData.loading ? <div>loading..</div> : <Chart data={chartData.data}/>
        }
      </Inner>
    </Container>
  )
}
