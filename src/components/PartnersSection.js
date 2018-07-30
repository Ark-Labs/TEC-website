import React from 'react'
import styled from 'styled-components'
import { Content, Title } from 'helpers'
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

const Image = styled.img``

const Partner = styled(Column)`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PartnersSection = ({ title, partners }) => (
  <Wrapper>
    <PaddedContainer>
      <Content>
        <Title>{title}</Title>
        <Columns isMultiline>
          {partners.map(image => (
            <Partner isSize="1/3" key={image}>
              <Image src={image} />
            </Partner>
          ))}
        </Columns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default PartnersSection
