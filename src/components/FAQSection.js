import React from 'react'
import styled from 'styled-components'
import { Ribbon, Content, Title, Button } from 'helpers'
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

const ContentWithBackground = Content.extend`
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
`

const QuestionWrapper = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
  &:before {
  }
`

const FAQSection = props => (
  <Wrapper>
    <PaddedContainer>
      <ContentWithBackground backgroundImage={props.faqBackground}>
        <Title>{props.faqTitle}</Title>
        {props.faqQuestions.map(({ question, answer }) => (
          <QuestionWrapper key={question}>
            <strong>{question}</strong>
            <p>{answer}</p>
          </QuestionWrapper>
        ))}
      </ContentWithBackground>
    </PaddedContainer>
  </Wrapper>
)

export default FAQSection
