import React from 'react';
import PropTypes from 'prop-types';

export default function LteMainHeader({ children }) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {children}
    </nav>
  );
}

LteMainHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

LteMainHeader.defaultProps = {
  children: null,
};
