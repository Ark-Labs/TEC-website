import React from 'react'
import styled from 'styled-components'
import { Container } from 'bloomer'

const Nav = styled.nav`
  min-height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Logo = styled.img`
  height: 80px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-left: -102px;
  font-size: 12px;
  @media (max-width: 768px) {
    margin: 0 0 20px;
  }
`

const Footer = ({ logo, copyright }) => (
  <Container>
    <Nav>
      <Logo src={logo} />
      <Copyright>{copyright}</Copyright>
    </Nav>
  </Container>
)

export default Footer
