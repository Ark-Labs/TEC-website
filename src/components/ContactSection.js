import React from 'react'
import styled from 'styled-components'
import AddressIcon from 'img/address.svg'
import { Content, Title, Button } from 'helpers'
import { Container } from 'bloomer'

const Wrapper = styled.section`
  position: relative;
  background: #333333;
  padding: 60px 0;
`

const NarrowContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: auto 15px;
  }
`

const TextField = styled.input`
  display: block;
  padding: 15px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #9b9b9b;
  background-color: #eeeeee;
  border: solid 1px #3d3d3d;
  color: black;
  margin-bottom: 16px;
  &:placeholder {
    color: #b2bac4;
  }
`

const TextArea = TextField.withComponent('textarea').extend``

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`

const SubmitButton = Button.withComponent('button').extend`
  outline: none;
  border: none;
  cursor: pointer;
  background: #ff4f4f;
  color: white !important;
  margin-top: 16px;
  width: 100%;
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Address = styled.div`
  font-size: 16px;
  font-weight: bold;
  max-width: 300px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    img {
      margin: 0 0 20px;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
`

const SocialLink = styled.a`
  width: 54px;
  height: 54px;
  margin: 0 10px;
`

const ContactSection = ({ title, address, socialLinks }) => (
  <Wrapper id="contact">
    <NarrowContainer>
      <Content>
        <Title>{title}</Title>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Label htmlFor="email">Mail</Label>
          <TextField
            name="email"
            type="email"
            placeholder="Your email address"
          />
          <Label htmlFor="body">Message</Label>
          <TextArea rows="5" name="body" placeholder="Type here" />

          <SubmitButton color="#ff4f4f" type="submit">
            Submit
          </SubmitButton>
        </form>
      </Content>
    </NarrowContainer>
    <Container>
      <ContactInfo>
        <Address>
          <img src={AddressIcon} />
          <p>{address}</p>
        </Address>

        <SocialLinks>
          {socialLinks.map(({ image, href }) => (
            <SocialLink key={href} href={href}>
              <img src={image} />
            </SocialLink>
          ))}
        </SocialLinks>
      </ContactInfo>
    </Container>
  </Wrapper>
)

export default ContactSection
