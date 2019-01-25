import React from 'react'
// import { Link } from 'gatsby'
import Container from 'react-bootstrap/lib/Container'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import typography from '../utils/typography'

export default ({ children }) => (
  <div>

    <style>
      { typography.toString() }
    </style>

    <header>
      <Container>
        <Navbar className="p-0" expand="md" variant="light">
          <Navbar.Brand href="#home">Mitchell Cash</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Nav.Link href="#home">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr className="mt-0"></hr>
      </Container>
    </header>

    <main>
      <Container>
        {children}
      </Container>
    </main>
  </div>
)
