import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from 'reactstrap';

export default function LteToggler() {
  return (
    <NavItem>
      <button className='btn nav-link' data-widget='pushmenu' type='button'>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </NavItem>
  );
}
