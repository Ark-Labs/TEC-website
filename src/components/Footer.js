import React from 'react'
import styled from 'styled-components'
import { Container } from 'bloomer'

const Nav = styled.nav`
  min-height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 80px;
`

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-left: -102px;
  font-size: 12px;
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
