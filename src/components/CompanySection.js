import React from 'react'
import styled from 'styled-components'
import { Content, Title, Ribbon } from 'helpers'
import { Container, Column, Columns } from 'bloomer'
import Panel from './CompanyPanel'

const Wrapper = styled.section`
  position: relative;
`

const StyledRibbon = styled(Ribbon)`
  width: 100%;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
  }
`

const PaddedColumns = styled(Columns)`
  margin-top: 60px !important;
  margin-bottom: 60px !important;
  position: relative;
`

const ImageColumn = styled(Column)`
  position: relative;
  text-align: center;
`

const Logo = styled.img`
  height: 100%;
  min-height: 300px;
  position: relative;
  z-index: 2;
`

const ProductSection = ({ title, body, logo, panels }) => (
  <Wrapper>
    <PaddedContainer>
      <Content>
        <PaddedColumns>
          <Column>
            <Title>{title}</Title>
            <p>{body}</p>
          </Column>
          <ImageColumn>
            <StyledRibbon color="#f7a825" left="300px" top inverse />
            <Logo src={logo} />
          </ImageColumn>
        </PaddedColumns>

        <PaddedColumns>
          {panels.map(panel => <Panel key={panel.title} {...panel} />)}
        </PaddedColumns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default ProductSection
