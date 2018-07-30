import React from 'react'
import styled from 'styled-components'
import { Ribbon, Content, Button } from 'helpers'
import { Container } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 45px 0 28px;
  }
`

const Logo = styled.img`
  display: block;
  height: 180px;
  margin: 0 auto 25px auto;
  @media (max-width: 768px) {
    display: none;
  }
`

const Title = styled.h3`
  font-size: 48px;
  line-height: 54px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 920px;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`

const Underline = styled.div`
  width: 180px;
  height: 14px;
  border-radius: 15px;
  background-color: #f7a825;
  margin: 16px 0 24px;
  @media (max-width: 768px) {
    width: 80px;
    height: 8px;
  }
`

const StyledButton = Button.extend`
  @media (max-width: 768px) {
    position: absolute;
    bottom: -80px;
    margin-left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`

const JoinUsSection = ({ title, logo, backgroundImage, button }) => (
  <Wrapper backgroundImage={backgroundImage}>
    <PaddedContainer>
      <Ribbon color="#f7a825" right="-400px" top />
      <Content>
        <Logo src={logo} />
        <Title>{title}</Title>
        <Underline />
        <StyledButton {...button} />
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default JoinUsSection
