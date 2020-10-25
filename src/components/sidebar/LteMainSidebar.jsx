import React from 'react';
import PropTypes from 'prop-types';
import LteBrand from './LteBrand';

export default function LteMainSidebar({ logo, brandName, children }) {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      <LteBrand logo={logo} name={brandName} />
      <section className='sidebar'>{children}</section>
    </aside>
  );
}

LteMainSidebar.propTypes = {
  logo: PropTypes.string,
  brandName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LteMainSidebar.defaultProps = {
  logo: '',
  brandName: '',
  children: null,
};
