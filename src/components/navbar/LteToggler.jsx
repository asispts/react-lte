import React from 'react';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem } from 'reactstrap';

export default function LteToggler({ children }) {
  return (
    <Nav navbar>
      <NavItem>
        <button className="btn nav-link" data-widget="pushmenu" type="button">
          <FontAwesomeIcon icon={faBars} />
          <span className="d-none">toggle</span>
        </button>
      </NavItem>
      {children}
    </Nav>
  );
}

LteToggler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

LteToggler.defaultProps = {
  children: null,
};
