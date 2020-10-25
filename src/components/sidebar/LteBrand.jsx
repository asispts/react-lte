import React from 'react';
import PropTypes from 'prop-types';

export default function LteBrand({ href, logo, name, alt }) {
  return (
    <a href={href} className='brand-link'>
      <img src={logo} alt={alt} className='brand-image img-circle elevation-3' style={{ opacity: 0.8 }} />
      <span className='brand-text font-weight-light'>{name}</span>
    </a>
  );
}

LteBrand.propTypes = {
  href: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
};

LteBrand.defaultProps = {
  href: '#',
  logo: '',
  name: '',
  alt: '',
};
