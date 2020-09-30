import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainHeader() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <Nav navbar>
        <NavItem>
          <button className="btn nav-link" data-widget="pushmenu" type="button">
            <FontAwesomeIcon icon={faBars} />
            <span className="d-none">toggle</span>
          </button>
        </NavItem>
        <NavItem className="d-none d-sm-inline-block">
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem className="d-none d-sm-inline-block">
          <NavLink href="/">Contact</NavLink>
        </NavItem>
      </Nav>
    </nav>
  );
}
