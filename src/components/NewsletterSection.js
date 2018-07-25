import React from 'react'
import styled from 'styled-components'
import { Content, Title, Button } from 'helpers'
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

const PaddedColumns = styled(Columns)`
  margin-top: 60px !important;
  margin-bottom: 60px !important;
  position: relative;
`

const ContentWithBackground = Content.extend`
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
`

const TextField = 

const NewsletterSection = props => (
  <Wrapper>
    <PaddedContainer>
      <ContentWithBackground backgroundImage={props.economyBackground}>
        <PaddedColumns>
          <Column>
            <Title>{props.newsletterTitle}</Title>
          </Column>
          <Column>
            <TextField name="email" />
          </Column>
          <Column>
            <Button color="#ff4f4f">Subscribe</Button>
          </Column>
        </PaddedColumns>
      </ContentWithBackground>
    </PaddedContainer>
  </Wrapper>
)

export default NewsletterSection
