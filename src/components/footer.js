import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

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
