import React from 'react'
import { Link } from 'gatsby'
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
          <Link to="/" className="navbar-brand">Mitchell Cash</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="/blog/" className="nav-link">Blog</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/contact/" className="nav-link">Contact</Link>
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
