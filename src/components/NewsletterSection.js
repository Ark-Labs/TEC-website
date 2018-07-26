import React from 'react'
import styled from 'styled-components'
import { Content, Title, Button } from 'helpers'
import { Container, Columns, Column } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
  background: #f7a825;
  background-image: url(${props => props.backgroundImage});
  background-size: 80%;
  background-position: center right;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const TextField = styled.input`
  display: block;
  padding: 15px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #9b9b9b;
`

const PaddedColumns = styled(Columns)`
  padding: 30px 0;
`

const SubmitButton = Button.withComponent('button').extend`
  outline: none;
  border: none;
  cursor: pointer;
  background: #ff4f4f;
  color: white !important;
  min-width: 60%
`

const NewsletterSection = ({ title, backgroundImage }) => (
  <Wrapper backgroundImage={backgroundImage}>
    <Container>
      <Content>
        <form
          name="newsletter"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <PaddedColumns isVCentered>
            <Column isSize="1/3">
              <Title color="black" noUnderline>
                {title}
              </Title>
            </Column>
            <Column>
              <TextField name="email" type="email" placeholder="Email" />
            </Column>
            <Column isSize="narrow">
              <SubmitButton color="#ff4f4f" type="submit">
                Subscribe
              </SubmitButton>
            </Column>
          </PaddedColumns>
        </form>
      </Content>
    </Container>
  </Wrapper>
)

export default NewsletterSection
