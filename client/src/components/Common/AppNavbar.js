import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png'

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="md" className='nav_bar'>
    <Container>
      <Navbar.Brand> 
        <img  className='navbar_logo' src={logo} alt="" />
        <span> Mobile-Shop</span>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link> <NavLink to="/"> List</NavLink> </Nav.Link>
          <Nav.Link><NavLink to="/create"> Create</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppNavbar