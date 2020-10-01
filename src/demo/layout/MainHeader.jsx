import React from 'react';
import {
  Form, Input, InputGroup, InputGroupAddon, Nav, NavItem, NavLink,
} from 'reactstrap';
import {
  faBars, faExpandArrowsAlt, faSearch, faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteMessageNavMenu from '../../components/navbar/LteMessageNavMenu';
import { messageNavData, notifNavData } from '../data/header';
import LteNotifNavMenu from '../../components/navbar/LteNotifNavMenu';

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

      <Form inline className="ml-3">
        <InputGroup size="sm">
          <Input className="form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
          <InputGroupAddon addonType="append">
            <button className="btn btn-navbar" type="submit">
              <FontAwesomeIcon icon={faSearch} />
              <span className="d-none">Search</span>
            </button>
          </InputGroupAddon>
        </InputGroup>
      </Form>

      <Nav navbar className="ml-auto">
        <LteMessageNavMenu data={messageNavData} />
        <LteNotifNavMenu data={notifNavData} />
        <NavItem>
          <NavLink tag="button" className="btn" data-widget="fullscreen">
            <FontAwesomeIcon icon={faExpandArrowsAlt} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag="button" className="btn" data-widget="control-sidebar" data-slide="true">
            <FontAwesomeIcon icon={faThLarge} />
          </NavLink>
        </NavItem>
      </Nav>
    </nav>
  );
}
