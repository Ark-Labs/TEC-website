import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const Question = styled.div`
  margin-left: 15px;
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
`

const ExpandIcon = styled.img`
  margin: 10px;
  transform: rotate(${props => (props.active ? '180' : '0')}deg);
`

const FAQQuestion = ({ expandIcon, question, answer, active, onClick }) => (
  <Wrapper onClick={onClick}>
    <ExpandIcon active={active} src={expandIcon} />
    <Question active={active}>
      <strong>{question}</strong>
      <p>{answer}</p>
    </Question>
  </Wrapper>
)

export default FAQQuestion
