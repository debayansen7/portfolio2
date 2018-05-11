import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
// import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import { AppBar} from 'material-ui';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
  render(){
    return(
      <header className="header">
        <AppBar
          title="Debayan Sen"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
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
