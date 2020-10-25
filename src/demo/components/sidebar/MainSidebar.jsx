import React from 'react';
import PropTypes from 'prop-types';
import BrandLink from './BrandLink';

const propTypes = {
  logo: PropTypes.string,
  brandName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  logo: '',
  brandName: '',
  children: null,
};

const MainSidebar = ({ logo, brandName, children }) => {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      <BrandLink logo={logo} name={brandName} />
      <section className='sidebar'>{children}</section>
    </aside>
  );
};

MainSidebar.propTypes = propTypes;
MainSidebar.defaultProps = defaultProps;

export default MainSidebar;
