import React from 'react'
import styled from 'styled-components'
import { Container } from 'bloomer'

const Wrapper = styled.div`
  background: black;
  position: fixed;
  top: ${props => (props.visible ? 0 : -128)}px;
  transition: top 0.15s linear;
  left: 0;
  width: 100%;
  z-index: 2;
`

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
  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
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

const NavbarLink = styled.a`
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

  onScroll = () => {
    let currentScrollPosition = window.pageYOffset

    if (this.prevScrollPosition > currentScrollPosition)
      this.setState({ visible: true })
    else this.setState({ visible: false })

    this.prevScrollPosition = currentScrollPosition
  }

  componentDidMount() {
    this.prevScrollPosition = window.pageYOffset
    window.onscroll = this.onScroll
  }

  render() {
    return (
      <Wrapper visible={this.state.visible}>
        <Container>
          <Nav>
            <Logo src={this.props.logo} />
            <Hamburger onClick={this.toggle} />
            <Menu open={this.state.open}>
              <NavbarLink href="#about">About</NavbarLink>
              <NavbarLink href="#marketplaces">
                Marketplaces / Ark Labs
              </NavbarLink>
              <NavbarLink href="#blockchain">Blockchain</NavbarLink>
              <NavbarLink href="#roadmap">Roadmap</NavbarLink>
              <NavbarLink href="#team">Team</NavbarLink>
              <NavbarLink href="#contact">Contact</NavbarLink>
              <NavbarLink href="https://tshop.arklabs.us/en/login">
                Login / Signup
              </NavbarLink>
            </Menu>
          </Nav>
        </Container>
      </Wrapper>
    )
  }
}

export default Navbar
