import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${props => props.fontSize || '24px'};
`

const Value = styled.div`
  font-size: 1.65em;
`

const Indicator = ({ value, size }) => {
  let dialWidth = 10
  let cX = size / 2
  let cY = size / 2
  let radius = (size - 2 * dialWidth) / 2
  let circumference = 2 * Math.PI * radius
  let offset = circumference * (1 - value / 100)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="gauge"
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5515f" />
          <stop offset="100%" stopColor="#9f041b" />
        </linearGradient>
      </defs>

      <g transform={`rotate(-90 ${cX} ${cY})`}>
        <circle
          cx={cX}
          cy={cY}
          r={radius}
          fill="none"
          stroke={'#aaa'}
          strokeWidth={dialWidth}
        />
        return (
        <circle
          cx={cX}
          cy={cY}
          r={radius}
          fill="none"
          stroke="url(#linear)"
          strokeWidth={dialWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap={'round'}
        />
        )
      </g>
    </svg>
  )
}

const Gauge = ({ value, size = 200, fontSize = '24px' }) => (
  <Wrapper>
    <Indicator value={value} size={size} />
    <Content fontSize={fontSize}>
      <Value>{value}%</Value>
      <div>Complete</div>
    </Content>
  </Wrapper>
)

export default Gauge
