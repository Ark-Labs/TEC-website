import React from 'react'
import styled from 'styled-components'
import { Container } from 'bloomer'

const Wrapper = styled.section`
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center;
  overflow: hidden;
  padding: 60px 0;
`

const Logo = styled.img`
  display: block;
  height: 180px;
  margin: 0 auto 25px auto;
`

const Title = styled.h3`
  font-size: 48px;
  line-height: 54px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 920px;
`

const Underline = styled.div`
  width: 180px;
  height: 14px;
  border-radius: 15px;
  background-color: #f7a825;
  margin: 16px 0 24px;
`

const Button = styled.a`
  display: inline-block;
  color: black;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  background: #d6e600;
  border-radius: 28px;
  text-transform: uppercase;
  padding: 10px 50px;
`

const JoinUsSection = ({
  logo,
  joinUsTitle,
  joinUsButtonText,
  joinUsButtonURL,
  joinUsBackground
}) => (
  <Wrapper backgroundImage={joinUsBackground}>
    <Container>
      <Logo src={logo} />
      <Title>{joinUsTitle}</Title>
      <Underline />
      <Button href={joinUsButtonURL}>{joinUsButtonText}</Button>
    </Container>
  </Wrapper>
)

export default JoinUsSection
