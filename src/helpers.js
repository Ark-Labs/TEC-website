import styled from 'styled-components'
import { Container } from 'bloomer'
import React from 'react'

const Overflow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const FullscreenContainer = styled(Container)`
  width: 100%;
  height: 100%;
`

const RibbonContainer = ({ children }) => (
  <Overflow>
    <FullscreenContainer>{children}</FullscreenContainer>
  </Overflow>
)

const Ribbon = styled.div`
  background-color: ${props => props.color};
  opacity: 0.8;
  position: absolute;
  bottom: ${props => (props.bottom ? '-100%' : 'unset')};
  top: ${props => (props.top ? '-100%' : 'unset')};
  ${props => (props.left ? `left: ${props.left}` : `right: ${props.right}`)};
  height: 200%;
  width: 600px;
  transform: skewX(55deg);
`

const Content = styled.div`
  position: relative;
  z-index: 1;
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

const Title = styled.h4`
  font-weight: bold;
  font-size: 36px;
  line-height: 1.17;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const Underline = styled.div`
  width: ${props => props.width || '100px'};
  height: 8px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: ${props => props.color || '#e52839'};
`

export { RibbonContainer, Ribbon, Content, Button, Title, Underline }
