import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';

class Footer extends Component {
  render(){
    return(
      <header>
        <Navbar>
          Footer here
          <Nav className="container">
            <NavItem eventKey={1} >Copy Right @ Debayan Sen</NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Footer;
