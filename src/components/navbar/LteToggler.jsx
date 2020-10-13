import React from 'react';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem } from 'reactstrap';
import LteIcon from '../LteIcon';

export default function LteToggler({ children }) {
  return (
    <Nav navbar>
      <NavItem>
        <button className='btn nav-link' data-widget='pushmenu' type='button'>
          <LteIcon icon={faBars} />
          <span className='d-none'>toggle</span>
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
