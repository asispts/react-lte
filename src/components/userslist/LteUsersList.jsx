import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const LteUsersList = ({ children }) => {
  return <ul className='users-list'>{children}</ul>;
};

LteUsersList.propTypes = propTypes;
LteUsersList.defaultProps = defaultProps;

export default LteUsersList;
