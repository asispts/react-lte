import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const LteCardTools = ({ children }) => {
  return <div className='card-tools'>{children}</div>;
};

LteCardTools.propTypes = propTypes;
LteCardTools.defaultProps = defaultProps;

export default LteCardTools;
