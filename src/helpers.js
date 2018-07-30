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
  bottom: ${props => (props.bottom ? '0' : 'unset')};
  top: ${props => (props.top ? '0' : 'unset')};
  ${props => (props.left ? `left: ${props.left}` : `right: ${props.right}`)};
  height: 1px;
  width: 600px;
  transform: skewX(${props =>
    props.inverse ? '-55deg' : '55deg'}) scale3d(1, 9999, 1);
}
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const Button = styled.a`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  background: #d6e600;
  border-radius: 28px;
  text-transform: uppercase;
  padding: 15px 50px;
  color: ${props => props.color || '#333'} !important;
  background: ${props => props.background || '#d6e600'};
`

const Title = styled.h4`
  font-weight: bold;
  font-size: 36px;
  line-height: 1.17;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: ${props => props.color || 'white'};

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.07;
  }

  &:after {
    content: '';
    display: ${props => (props.noUnderline ? 'none' : 'block')};
    margin: 10px 0;
    width: ${props => props.underlineWidth || '100px'};
    height: 8px;
    border-radius: 15px;
    margin-bottom: 25px;
    background-color: ${props => props.underlineColor || '#e52839'};
  }
`

export { RibbonContainer, Ribbon, Content, Button, Title }
