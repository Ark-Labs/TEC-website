import React from 'react'
import styled from 'styled-components'
import { Content, Title, Ribbon } from 'helpers'
import { Container, Column, Columns } from 'bloomer'
import Panel from './CompanyPanel'

const Wrapper = styled.section`
  position: relative;
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
  text-align: center;
`

const Logo = styled.img`
  height: 100%;
  min-height: 300px;
`

const ProductSection = props => (
  <Wrapper>
    <PaddedContainer>
      <Ribbon color="#f7a825" right="-33%" top inverse />
      <Content>
        <PaddedColumns>
          <Column>
            <Title>{props.companyTitle}</Title>
            <p>{props.companyBody}</p>
          </Column>
          <ImageColumn>
            <Logo src={props.companyLogo} />
          </ImageColumn>
        </PaddedColumns>

        <PaddedColumns>
          {props.companyPanels.map(panel => (
            <Panel key={panel.title} {...panel} />
          ))}
        </PaddedColumns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default ProductSection
