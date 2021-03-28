import React from 'react'
import styled from 'styled-components'
import size from '../../../constants/size'
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
  @media ${size.xl}{
    p.intro{
      width: 45%;
      margin-bottom: 45px;
    }
  }
  @media ${size.lg}{
    text-align: center;
    margin-bottom: 0;

    p.intro{
      width: 50%;
      margin: 25px auto 100px auto;
    }
  }
  @media ${size.sm}{
    p.intro{
      width: 70%;
      margin-bottom: 25px;
    }
  }
  @media ${size.xs}{
    p.intro{
      width: 100%;
    }
  }

`
const PlanContainer = styled.div`
  display: grid;
  padding: 0 150px;
  grid-template-columns: auto auto auto;
  grid-gap: 45px;

  @media ${size.xl}{
    padding: 0;
  }
  @media ${size.lg}{
    grid-template-columns: auto auto;
    justify-content: space-around;
    grid-gap: 15px;
  }
  @media ${size.sm}{
    grid-template-columns: auto;
  }

`
export default function Pricing(){
  return (
    <Container id="pricing">
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
