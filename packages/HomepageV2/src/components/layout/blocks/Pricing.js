import React from 'react'
import styled from 'styled-components'

import Plan from '../Plan'
import planData from '../../../constants/plandata'

const Container = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;
  h2.intro{
    font-size: 3rem;
  }
  p.intro{
    width: 25%;
    margin: 25px 0;
  }

`
const PlanContainer = styled.div`
  display: grid;
  padding: 0 150px;
  grid-template-columns: auto auto auto;
`

export default function Pricing(){
  return (
    <Container>
      <h2 className="intro">Pricing.</h2>
      <p className="intro">The money is used for rent, electricity, water, basic living costs. Instead of getting a part time job, I can spend my time workign on my applications.</p>
      <PlanContainer>
        {
          planData.map((plan) => <Plan key={plan.title} {...plan}></Plan>)
        }
      </PlanContainer>
    </Container>
  )
}
