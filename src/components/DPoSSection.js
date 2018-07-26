import React from 'react'
import styled from 'styled-components'
import { Content, Title, Button } from 'helpers'
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

const Body = styled.div`
  margin-bottom: 36px;
  white-space: pre-line;
`

const CenteredColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const Image = styled.img`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 110%;
    max-width: none;
    transform: translateY(-50%);
  }
`

const ProductSection = props => (
  <Wrapper>
    <PaddedContainer>
      <Content>
        <Columns>
          <Column isSize="2/3">
            <Title>{props.dposTitle}</Title>
            <Body>{props.dposBody}</Body>
          </Column>
          <CenteredColumn>
            <Image src={props.dposImage} />
            <Button href={props.dposButtonURL}>{props.dposButtonText}</Button>
          </CenteredColumn>
        </Columns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default ProductSection
