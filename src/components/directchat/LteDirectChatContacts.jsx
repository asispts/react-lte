import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const LteDirectChatContacts = ({ children }) => {
  return <div className='direct-chat-contacts'>{children}</div>;
};

LteDirectChatContacts.propTypes = propTypes;
LteDirectChatContacts.defaultProps = defaultProps;

export default LteDirectChatContacts;
