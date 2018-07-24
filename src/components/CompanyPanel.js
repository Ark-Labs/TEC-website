import React from 'react'
import { Column } from 'bloomer'
import styled from 'styled-components'
import Gauge from 'components/Gauge'
import MediaQuery from 'react-responsive'

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  text-align: center;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  color: #e52839;
  min-height: 60px;
  margin: 10px auto;
`

const HR = styled.div`
  width: 100%;
  height: 6px;
  background: #f7a825;
  margin: 20px 0;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`

const CompanyPanel = ({ progress, title, text }) => (
  <Column>
    <Wrapper>
      <MediaQuery query="(max-width: 768px)">
        <Gauge value={progress} size={250} />
      </MediaQuery>
      <MediaQuery query="(min-width: 769px) and (max-width: 1023px)">
        <Gauge value={progress} size={150} fontSize="16px" />
      </MediaQuery>
      <MediaQuery query="(min-width: 1024px)">
        <Gauge value={progress} />
      </MediaQuery>
      <HR />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  </Column>
)

export default CompanyPanel
