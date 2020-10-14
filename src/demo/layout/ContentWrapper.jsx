import React from 'react';
import PropTypes from 'prop-types';

export default function ContentWrapper({ children }) {
  return <main className='content-wrapper'>{children}</main>;
}

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ContentWrapper.defaultProps = {
  children: null,
};
