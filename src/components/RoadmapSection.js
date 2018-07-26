import React from 'react'
import styled from 'styled-components'
import { Content, Title } from 'helpers'
import { Container } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
  }
`

const RoadmapSection = ({ title }) => (
  <Wrapper>
    <PaddedContainer>
      <Content>
        <Title>{title}</Title>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default RoadmapSection
