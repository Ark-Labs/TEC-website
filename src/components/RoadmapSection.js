import React from 'react'
import styled from 'styled-components'
import { Content, Title } from 'helpers'
import { Container, Column, Columns } from 'bloomer'
import filter from 'lodash/filter'
import Event from 'components/RoadmapEvent'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
  }
`

const Roadmap = styled.div``

const Line = styled.div`
  height: 10px;
  width: 100%;
  background: white;
  border-radius: 10px;
`

const TopEvents = styled(Columns)`
  margin-bottom: 1.5rem !important;
  margin-left: 30px;
  width: calc(90% - 30px);
`

const BottomEvents = styled(Columns)`
  margin-top: 0 !important;
  margin-left: calc(10% + 30px);
  width: calc(90% - 30px);
`

const RoadmapSection = ({ title, progress, events }) => {
  const topEvents = filter(events, (event, index) => index % 2 === 0)
  const bottomEvents = filter(events, (event, index) => index % 2 === 1)

  return (
    <Wrapper id="roadmap">
      <PaddedContainer>
        <Content>
          <Title>{title}</Title>
          <Roadmap>
            <TopEvents>
              {topEvents.map(event => (
                <Column key={event.date}>
                  <Event {...event} direction="top" />
                </Column>
              ))}
            </TopEvents>
            <Line progress={progress} />
            <BottomEvents>
              {bottomEvents.map(event => (
                <Column key={event.date}>
                  <Event {...event} direction="bottom" />
                </Column>
              ))}
            </BottomEvents>
          </Roadmap>
        </Content>
      </PaddedContainer>
    </Wrapper>
  )
}

export default RoadmapSection
