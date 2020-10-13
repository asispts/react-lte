import React from 'react';
import PropTypes from 'prop-types';

export default function LteNavSidebar({ children }) {
  return (
    <nav className='mt-2'>
      <ul
        className='nav nav-pills nav-sidebar flex-column'
        data-widget='treeview'
        role='menu'
        data-accordion='false'>
        {children}
      </ul>
    </nav>
  );
}

LteNavSidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

LteNavSidebar.defaultProps = {
  children: null,
};
