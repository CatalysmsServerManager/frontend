import React from 'react'
import styled from 'styled-components'
import size from '../../constants/size'

import Link from './Link'
import icon from '../../images/icon-black.svg'

const Container = styled.section`
  min-height: 100vh;
  padding-bottom: 100px;
`
const Landing = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 5rem;
    color: ${({ theme }) => theme.main};
    @media ${size.sm}{
      font-size: 3rem;
      text-align: center;
    }
  }
`
const Icon = styled.img`
  position: absolute;
  top:  50%;
  right: 0;
  left: 0;
  width: 60%;
  height: 60%;
  transform: translateY(-50%);
  margin: 0 auto;
  opacity: 0.05;
  z-index: -1;
`

const ChaptersContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${size.sm}{
    width: 90%;
  }
  @media ${size.xs}{
    width: 95%;
  }
`
const Chapter = styled.div`
  margin: 100px 25px;
  h2{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.main};
  }
  p{
    margin-bottom: 15px;
    margin-top: 15px;
  }
  @media ${size.md}{
    margin: 50px 25px;
  }
  @media ${size.sm}{
    margin: 25px 15px;
  }
`
const SubChapter = styled.div`
  margin-top: 50px;
  li{
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export default function Terms(){
  return (
    <Container>
      <Landing>
        <h1>Terms of Service</h1>
        <p>Last modified on 10 Dec 2019.</p>
        <Icon alt="Csmm icon" src={icon}/>
      </Landing>
      <ChaptersContainer>
        <Chapter>
          <h2>Licensing</h2>
          <SubChapter>
            <h3>Website licensing</h3>
            <p>
              The Website, the URL, as well as all content included on the Website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is Our property and/or Our content suppliers, and is protected by applicable copyright laws.
            </p>
            <p>
              Any graphics, identifiers, logos, page headers, button icons, scripts, and service names are trademarks, registered trademarks or trade dress of Us. All other trademarks not owned by Us that appear on the Website, are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Us.
            </p>
            <p>
              Where visiting the Website, You are granted during Your visit, a limited license to access and make personal use of the Website, the URL, as well as all content included on the Website as offered to You.
            </p>
          </SubChapter>
          <SubChapter>
            <h3>Platform license (csmm content solution)</h3>
            <p>
              In case where You are being offered access to certain Customer Content, You shall 1. respect the limits within which the Customer Content has been made available to You, and 2. be allowed to use the Csmm Services only in order to get access to the Customer Content as made available to You.
            </p>
          </SubChapter>
          <SubChapter>
            <h3>License restrictions</h3>

            Except with our written consent , You shall not:
            <ul>
              <li>modify the Website, Customer Content, or the Products and Services, or any portion of it;</li>
              <li>
                Download the Website, or any portion of it, except for page caching, and/or where it or its content has explicitly been made available by for download. Usage of any download shall be limited to Your personal use only;
              </li>
              <li>
                Download the Customer Content, or any portion of it, except to the extent and within the limits within which such Customer Content has been made available to You;
              </li>
              <li>
                Use any logo or other of Our proprietary graphic or trademark outside of scope of the license granted, including in connection with any product or service that is not Ours, in any manner that is likely to cause confusion among customers, or in any manner that (may) disparage(s) or discredit(s) Us;
              </li>
              <li>
                reproduce, duplicate, copy, sell, resell, visit, or otherwise exploit the Website, Customer Content, or the Products and Services, or any portion of it, for any commercial purpose;
              </li>
              <li>
                frame or utilize framing techniques to enclose any trademark, logo, Website, Customer Content, or the Products and Services, or any portion of it, or other proprietary information (including images, text, page layout, or form) without express written consent;
              </li>
              <li>
                use any meta tags or any other “hidden text” utilizing any of Our (trade) name or trademarks;
              </li>
              <li>
                remove or alter any copyright notice.
              </li>
            </ul>
          </SubChapter>
          <SubChapter>
            <h3>Termination</h3>
            The license granted shall automatically terminate after the time for which they are granted, if You violate these Terms and/or any of these restrictions, and/or may be terminated for convenience at any time, whichever is first. We reserve all rights of action to seek for compensation and/or injunction.
          </SubChapter>
        </Chapter>
        <Chapter>
          <h2>Contact</h2>
          <p>
            In case you have any questions or wish to contact us in the context of these terms of service. U can reach us via the options below:
          </p>
          <ul>
            <li><Link isExternal to="https://github.com/niekcandaele">Niek Candaele</Link></li>
            <li>info@csmm.app</li>
            <li><Link isExternal to="https://discordapp.com/invite/%45wy%44d%4E%41">Discord</Link></li>
          </ul>
        </Chapter>
      </ChaptersContainer>
    </Container>
  )
}
