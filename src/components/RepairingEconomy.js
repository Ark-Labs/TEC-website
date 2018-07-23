import React from 'react'
import styled from 'styled-components'
import { RibbonContainer, Ribbon, Content, Title, Button } from 'helpers'
import { Container, Columns, Column } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
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

const PaddedColumns = styled(Columns)`
  margin-top: 20px !important;
  margin-bottom: 20px !important;
`

const ColumnText = styled.p`
  font-weight: 600;
`

const RepairingEconomySection = props => (
  <Wrapper id="about">
    <RibbonContainer>
      <StyledRibbon color="#e52839" right="calc(60% - 600px)" top />
    </RibbonContainer>
    <PaddedContainer>
      <ContentWithBackground backgroundImage={props.repairingEconomyBackground}>
        <Title>{props.repairingEconomyTitle}</Title>
        <p>{props.repairingEconomyUpperText}</p>
        <PaddedColumns>
          {props.repairingEconomyColumns.map(({ body, title }) => (
            <Column key={title}>
              <Title color="#f7a825">{title}</Title>
              <ColumnText>{body}</ColumnText>
            </Column>
          ))}
        </PaddedColumns>
        <p>{props.repairingEconomyLowerText}</p>
        <StyledButton href={props.repairingEconomyButtonURL}>
          {props.repairingEconomyButtonText}
        </StyledButton>
      </ContentWithBackground>
    </PaddedContainer>
  </Wrapper>
)

export default RepairingEconomySection
