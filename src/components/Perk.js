import React from 'react'
import { Column } from 'bloomer'
import styled from 'styled-components'

const Wrapper = styled(Column)`
  text-align: center;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  color: #f7a825;
  min-height: 60px;
  margin: 10px auto;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`

const Perk = ({ image, title, text }) => (
  <Wrapper>
    <img src={image} />
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Wrapper>
)

export default Perk
