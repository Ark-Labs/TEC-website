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

const Logo = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`

const SubTitle = styled.h5`
  font-size: 36px;
  font-weight: bold;
  color: #f7a825;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Body = styled.div`
  margin-bottom: 36px;
  white-space: pre-line;
`

const Panels = styled(Columns)`
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  position: relative;
`

const Panel = styled(Column)`
  @media (max-width: 768px) {
    margin-left: -20px !important;
    margin-right: -20px !important;
  }
`

const PanelContent = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 86px;
  background-color: ${props => props.color || 'rgba(56, 141, 108, 0.68)'};
  display: flex;
  align-items: center;
`

const PanelImage = styled.img`
  width: 100%;
  display: block;
`

const PanelText = styled.div`
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const ProductSection = ({ title, logo, subtitle, body, panels }) => (
  <Wrapper>
    <PaddedContainer>
      <Ribbon color="#388d6c" left="-450px" top />
      <Content>
        <Title>{title}</Title>
        <Columns>
          <Column>
            <Logo src={logo} />
            <SubTitle>{subtitle}</SubTitle>
          </Column>
          <Column>
            <Body>{body}</Body>
            <Button background="#f7a825" color="white">
              Read more...
            </Button>
          </Column>
        </Columns>

        <Panels isGapless>
          {panels.map(({ text, image, url }) => (
            <Panel key={text}>
              <PanelImage src={image} />
              <PanelContent href={url}>
                <PanelText>{text}</PanelText>
              </PanelContent>
            </Panel>
          ))}
        </Panels>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default ProductSection
