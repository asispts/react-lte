import React from 'react';
import PropTypes from 'prop-types';

export default function LteBrand({ logo, name, alt }) {
  return (
    <a href="index3.html" className="brand-link">
      <img src={logo} alt={alt} className="brand-image img-circle elevation-3" style={{ opacity: 0.8 }} />
      <span className="brand-text font-weight-light">{name}</span>
    </a>
  );
}

LteBrand.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string,
};

LteBrand.defaultProps = {
  logo: '',
  name: '',
  alt: '',
};
