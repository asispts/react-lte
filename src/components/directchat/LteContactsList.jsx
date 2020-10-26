import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const LteContactsList = ({ children }) => {
  return <ul className='contacts-list'>{children}</ul>;
};

LteContactsList.propTypes = propTypes;
LteContactsList.defaultProps = defaultProps;

export default LteContactsList;
