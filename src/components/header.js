import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  render(){
    return(
      <header className="header">
        <Navbar inverse collapseOnSelect>
          Debayan Sen
          <Navbar.Collapse>
          <Nav >
              <NavItem eventKey={1} href="/">Home</NavItem>
              <NavItem eventKey={1} href="/">About Me</NavItem>              
              <NavItem eventKey={1} href="/">Projects</NavItem>
              <NavItem eventKey={1} href="/">Skills</NavItem>
              <NavItem eventKey={1} href="/">Contact Me</NavItem>
          </Nav>

          </Navbar.Collapse>
        </Navbar>

      </header>
    );
  }
}

export default Header;
