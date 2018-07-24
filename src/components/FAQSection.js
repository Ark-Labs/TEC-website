import React, { Component } from 'react'
import styled from 'styled-components'
import { Content, Title } from 'helpers'
import { Container } from 'bloomer'
import FAQQuestion from './FAQQuestion'

const Wrapper = styled.section`
  position: relative;
`

const PaddedContainer = styled(Container)`
  padding: 60px 0 120px;
`

const ContentWithBackground = Content.extend`
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
`

class FAQSection extends Component {
  constructor() {
    super()
    this.state = { activeQuestion: 0 }
  }

  render() {
    return (
      <Wrapper>
        <PaddedContainer>
          <ContentWithBackground backgroundImage={this.props.faqBackground}>
            <Title>{this.props.faqTitle}</Title>
            {this.props.faqQuestions.map((question, index) => (
              <FAQQuestion
                {...question}
                key={index}
                active={this.state.activeQuestion === index}
                onClick={() => this.setState({ activeQuestion: index })}
              />
            ))}
          </ContentWithBackground>
        </PaddedContainer>
      </Wrapper>
    )
  }
}

export default FAQSection
