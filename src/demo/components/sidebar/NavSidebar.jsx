import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const NavSidebar = ({ children }) => {
  return (
    <nav className='mt-2'>
      <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
        {children}
      </ul>
    </nav>
  );
};

NavSidebar.propTypes = propTypes;
NavSidebar.defaultProps = defaultProps;

export default NavSidebar;
