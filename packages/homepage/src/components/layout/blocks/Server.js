import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import size from '../../../constants/size'
import { darken } from 'polished'
import Loading from '../Loading'
import Chart from '../Chart'

const Container = styled.section`
  margin: 150px 0;
  width: 80%;
  h2{
    font-size: 3rem;
    @media ${size.xs}{
    font-size: 2rem;
    text-align: center;
    }
    @media ${size.xxs}{
      font-size: 1.5rem;
    }
  }
  @media ${size.lg}{
    width: 100%;
  }
`

const Regions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  margin-bottom: 30px;

  @media ${size.sm}{
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 35px;
  }
`
const Region = styled.div`
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.main}
  }

  &.selected{
    color: ${({ theme }) => theme.main};
    &:hover{
      color: ${({ theme }) => darken(0.1, theme.main)};
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

  @media ${size.xl}{
    width: 100%;
  }
  @media ${size.sm}{
    height: 300px;
  }
`
export default function Server() {
  const dataset = {}
  const REGIONS = ['eu', 'us', 'au']
  const [chartData, setChartData] = useState({ loading: true })

  useEffect(() => {
    async function fetchData() {
      // make eu the default selected region
      document.querySelector('.region').classList.add('selected')
      // calculate date 30 days ago
      const d = new Date()
      d.setMonth(d.getMonth() - 1)
      // fetch data from different regions

      for (const REGION of REGIONS) {
        dataset[REGION] = await getStats(d, REGION)
      }

      await getChartData()
    }
    fetchData()
  }, [])

  async function getChartData() {
    const regions = await getSelectedRegions()

    if (regions.length > 1) {
      // optellen
    } else {
      const playerData = []
      const serverData = []
      for (const region of regions) {
        dataset[region].map((regiondata) => {
          playerData.push({ 'x': regiondata.date, 'y': regiondata.players })
          serverData.push({ 'x': regiondata.date, 'y': regiondata.servers })
        })
      }

      setChartData({
        data: [
          { 'id': 'players', 'data': playerData, 'color': 'hsl(197, 70%, 50%)' },
          { 'id': 'servers', 'data': serverData, 'color': '#f47DA4' }
        ],
        loading: false
      })
    }
  }

  async function getStats(date, region) {
    const res = await fetch(`https://${region}.csmm.app/api/stats?since=${date.valueOf()}`)
    const json = await res.json()
    const regionData = []
    json.map((day) => {
      regionData.push({ players: day.players, servers: day.servers, date: day.createdAt })
    })
    return regionData
  }

  function setSelectRegion(e) {
    const el = e.currentTarget
    el.classList.contains('selected') ? el.classList.remove('selected') : el.classList.add('selected')
    getChartData()
  }

  function getSelectedRegions() {
    const r = []
    const selectedRegions = document.querySelectorAll('.region.selected')

    for (let i = 0; i < selectedRegions.length; i++) {
      r.push(selectedRegions[i].dataset.region)
    }
    return r
  }

  return (
    <Container>
      <h2>Servers & Players.</h2>
      <Regions>{REGIONS.map((region) => <Region className="region" data-region={region} key={region} onClick={setSelectRegion}>{region}</Region>)}</Regions>
      <Inner>{chartData.loading ? <Loading/> : <Chart data={chartData.data}/>}
      </Inner>
    </Container>
  )
}
