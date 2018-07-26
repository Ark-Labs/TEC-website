import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container } from 'bloomer'

const Nav = styled.nav`
  min-height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const Logo = styled.img`
  height: 80px;
`

const Menu = styled.div`
  display: flex;
  font-size: 16px;
  width: 100%;
  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
}
  }
`

const HamburgerLine = styled.div`
  height: 3px;
  width: 30px;
  background-color: #e52839;
  border-radius: 3px;
`

const Hamburger = styled(props => (
  <a {...props}>
    <HamburgerLine />
    <HamburgerLine />
    <HamburgerLine />
  </a>
))`
  margin: 54px 20px;
  cursor: pointer;
  display: flex;
  height: 21px;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 769px) {
    display: none;
  }
`

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-align: center;

  &:hover {
    color: #f7a825;
  }
`

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Container>
        <Nav>
          <Logo src={this.props.logo} />
          <Hamburger onClick={this.toggle} />
          <Menu open={this.state.open}>
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
  }
}

export default Navbar
