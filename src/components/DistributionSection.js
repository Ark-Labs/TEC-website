import React from 'react'
import styled from 'styled-components'
import { Content, Title } from 'helpers'
import { Container, Columns, Column } from 'bloomer'
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 0 28px;
  }
`

const CenteredColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const PieChartTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px
  font-weight: bold;
  text-transform: uppercase;
`

const PieChartWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const Legend = styled(Column)`
  white-space: nowrap;
  color: ${props => props.color};
  font-size: 36px
  font-weight: bold;
  text-transform: uppercase;
`

const Bullet = styled.span`
  color: white;
`

const Labels = styled(Columns)`
  margin-top: 0;
`

const DistributionSection = ({ title, distribution }) => (
  <Wrapper>
    <PaddedContainer>
      <Content>
        <Title>{title}</Title>
        <Columns>
          <CenteredColumn>
            <PieChartWrapper>
              <PieChartTitle>Distribution</PieChartTitle>
              <ResponsiveContainer width="100%" aspect={1}>
                <PieChart>
                  <Pie
                    data={distribution}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="75%"
                    outerRadius="90%"
                    fill="#8884d8"
                    paddingAngle={5}
                  >
                    {distribution.map(entry => (
                      <Cell
                        key={entry.name}
                        stroke={0}
                        fill={entry.color || '#e52839'}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </PieChartWrapper>
            <Labels>
              {distribution.map(({ color, name, value }) => (
                <Legend key={name} color={color} isSize="1/2">
                  {value}% <Bullet>•</Bullet> {name}
                </Legend>
              ))}
            </Labels>
          </CenteredColumn>
          <Column />
        </Columns>
      </Content>
    </PaddedContainer>
  </Wrapper>
)

export default DistributionSection
