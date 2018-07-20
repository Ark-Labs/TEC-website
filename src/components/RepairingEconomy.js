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
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center;
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
  margin: 0 auto;
`

const StyledRibbon = styled(Ribbon)`
  @media (max-width: 768px) {
    right: 60%;
  }
`

const RepairingEconomySection = props => (
  <Wrapper backgroundImage={props.repairingEconomyBackground}>
    <RibbonContainer>
      <StyledRibbon color="#e52839" right="calc(60% - 600px)" top />
    </RibbonContainer>
    <PaddedContainer>
      <Content>
        <Title>{props.repairingEconomyTitle}</Title>
        <Underline />
        <p>{props.repairingEconomyBody}</p>
        <StyledButton href={props.repairingEconomyButtonURL}>
          {props.repairingEconomyButtonText}
        </StyledButton>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default RepairingEconomySection
