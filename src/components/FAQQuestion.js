import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
  position: relative;

  strong {
    cursor: pointer;
    display: block;
  }

  p {
    height: ${props => (props.active ? 'auto' : '0')};
    overflow: hidden;
  }

  &:before {
  }
`

const FAQQuestion = ({ question, answer, active, onClick }) => (
  <Wrapper active={active} onClick={onClick}>
    <strong>{question}</strong>
    <p>{answer}</p>
  </Wrapper>
)

export default FAQQuestion
