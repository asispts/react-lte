import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const LteDirectChatMessages = ({ children }) => {
  return <div className='direct-chat-messages'>{children}</div>;
};

LteDirectChatMessages.propTypes = propTypes;
LteDirectChatMessages.defaultProps = defaultProps;

export default LteDirectChatMessages;
