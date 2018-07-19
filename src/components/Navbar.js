import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container } from 'bloomer'

const Nav = styled.nav`
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 80px;
`

const Menu = styled.div`
  display: flex;
  font-size: 16px;
`

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 24px;
  text-transform: uppercase;

  &:hover {
    color: #f7a825;
  }
`

const Navbar = ({ logo }) => (
  <Container>
    <Nav>
      <Logo src={logo} />
      <Menu>
        <NavbarLink to="#about">About</NavbarLink>
        <NavbarLink to="#marketplaces">Marketplaces / Ark Labs</NavbarLink>
        <NavbarLink to="#blockchain">Blockchain</NavbarLink>
        <NavbarLink to="#roadmap">Roadmap</NavbarLink>
        <NavbarLink to="#team">Team</NavbarLink>
        <NavbarLink to="#contact">Contact</NavbarLink>
      </Menu>
    </Nav>
  </Container>
)

export default Navbar
