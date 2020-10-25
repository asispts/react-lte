import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
  badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  badgeColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const defaultProps = {
  badgeText: '0',
  badgeColor: 'info',
};

const LteNavDropdown = ({ icon, badgeText, badgeColor, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown tag='li' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle nav>
        <FontAwesomeIcon icon={icon} />
        <Badge color={badgeColor} className='navbar-badge'>
          {badgeText}
        </Badge>
      </DropdownToggle>
      <DropdownMenu right className='dropdown-menu-lg'>
        {children}
      </DropdownMenu>
    </Dropdown>
  );
};

LteNavDropdown.propTypes = propTypes;
LteNavDropdown.defaultProps = defaultProps;

export default LteNavDropdown;
