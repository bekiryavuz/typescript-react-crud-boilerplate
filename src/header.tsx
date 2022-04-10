import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Header: React.FC = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> CRUD - boilerplate </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/table1">Table 1</Nav.Link>
            <Nav.Link href="/table2">Table 2</Nav.Link>
            <Nav.Link href="/table3">Table 3</Nav.Link>
            <Nav.Link href="/table4">Table 4</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;