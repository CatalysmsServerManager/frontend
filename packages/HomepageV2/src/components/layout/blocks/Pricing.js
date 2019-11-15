import React from 'react'
import styled from 'styled-components'

import Plan from '../Plan'
import planData from '../../../constants/plandata'

const Container = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;

`
const PlanContainer = styled.div`
  width: 100%;
`

export default function Pricing(){
  return (
    <Container>
      <h2>Pricing.</h2>
      <p>The money is used for rent, electricity, water, basic living costs. Instead of getting a part time job, I can spend my time workign on my applications.</p>
      <PlanContainer>
        {
          planData.map((plan) => { <Plan {...plan}></Plan>})
        }
      </PlanContainer>
    </Container>
  )  
}
