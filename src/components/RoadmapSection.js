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
    padding: 60px 0 120px;
  }
`

const Roadmap = styled.div`
  @media (max-width: 768px) {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    position: relative;
  }
`

const Line = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 10px;
    height: 100%;
    position: absolute;
    margin: 0 5px;
  }

  &:after {
    position: absolute;
    content: '';
    background: ${props => props.color || '#e52839'};
    width: ${props => `${props.progress}%`};
    height: 100%;
    @media (max-width: 768px) {
      height: ${props => `${props.progress}%`};
      width: 100%;
    }
  }
`

const TopEvents = styled(Columns)`
  margin-bottom: 1.5rem !important;
  margin-left: 30px;
  width: calc(90% - 30px);
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -16px !important;
  }
`

const BottomEvents = styled(Columns)`
  margin-top: 0 !important;
  margin-left: calc(10% + 30px);
  width: calc(90% - 30px);
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2.5rem !important;
    margin-left: calc(60px);
    width: calc(90% + 26px);
  }
`

const RoadmapSection = ({ title, events }) => {
  const topEvents = filter(events, (event, index) => index % 2 === 0)
  const bottomEvents = filter(events, (event, index) => index % 2 === 1)
  const progress = (filter(events, 'past').length * 62) / events.length

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
