import React from 'react'
import styled from 'styled-components'
import { Ribbon, Content, Title, Button } from 'helpers'
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

const StyledRibbon = styled(Ribbon)`
  @media (max-width: 768px) {
    left: -360px;
  }
`

const EconomySection = ({
  title,
  backgroundImage,
  upperText,
  columns,
  lowerText,
  button
}) => (
  <Wrapper id="about">
    <PaddedContainer>
      <StyledRibbon color="#e52839" left="-80px" top />
      <ContentWithBackground backgroundImage={backgroundImage}>
        <Title>{title}</Title>
        <p>{upperText}</p>
        <PaddedColumns>
          {columns.map(({ body, title }) => (
            <Column key={title}>
              <Title color="#f7a825">{title}</Title>
              <strong>{body}</strong>
            </Column>
          ))}
        </PaddedColumns>
        <p>{lowerText}</p>
        <StyledButton {...button} />
      </ContentWithBackground>
    </PaddedContainer>
  </Wrapper>
)

export default EconomySection
