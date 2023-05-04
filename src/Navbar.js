import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from './assets/logobusiness.png'

function AppNavbar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              src={logo}
              className='d-inline-block align-top'
              alt='My Logo'
              style={{ width: '200px' }}
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/boutique'>
              <Nav.Link>Boutique</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
