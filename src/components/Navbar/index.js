import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';


function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className='navcss' href="/">Meg Meyers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="navcss_2">
        <Nav.Link href="/" className={
            window.location.pathname === '/' || window.location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
          <Nav.Link href="/portfolio" className={
            window.location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
          <Nav.Link href="/contact" className={
            window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )



}

export default NavBar;