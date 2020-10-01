import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Badge, Dropdown, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import LteIcon from '../LteIcon';

export default function LteNavDropdown({ icon, badgeText, children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown tag="li" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle nav>
        <LteIcon icon={icon} />
        <Badge color="danger" className="navbar-badge">{badgeText}</Badge>
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-lg">
        {children}
      </DropdownMenu>
    </Dropdown>
  );
}

LteNavDropdown.defaultProps = {
  badgeText: '0',
  children: null,
};

LteNavDropdown.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  badgeText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
