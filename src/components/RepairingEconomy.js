import React from 'react'
import styled from 'styled-components'
import {
  RibbonContainer,
  Ribbon,
  Content,
  Title,
  Underline,
  Button
} from 'helpers'
import { Container } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 45px 0 28px;
  }
`

const StyledButton = Button.extend`
  display: block;
  max-width: 450px;
  margin: 60px auto 0;
`

const StyledRibbon = styled(Ribbon)`
  @media (max-width: 768px) {
    right: 60%;
  }
`

const ContentWithBackground = Content.extend`
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
`

const RepairingEconomySection = props => (
  <Wrapper>
    <RibbonContainer>
      <StyledRibbon color="#e52839" right="calc(60% - 600px)" top />
    </RibbonContainer>
    <PaddedContainer>
      <ContentWithBackground backgroundImage={props.repairingEconomyBackground}>
        <Title>{props.repairingEconomyTitle}</Title>
        <Underline />
        <p>{props.repairingEconomyBody}</p>
        <StyledButton href={props.repairingEconomyButtonURL}>
          {props.repairingEconomyButtonText}
        </StyledButton>
      </ContentWithBackground>
    </PaddedContainer>
  </Wrapper>
)

export default RepairingEconomySection
