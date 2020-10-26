import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card } from 'reactstrap';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.string,
};

const defaultProps = {
  children: null,
  color: '',
};

const LteDirectChat = ({ children, color }) => {
  const colorClass = color === '' ? undefined : `direct-chat-${color}`;
  const classes = classNames('direct-chat', colorClass);

  return <Card className={classes}>{children}</Card>;
};

LteDirectChat.propTypes = propTypes;
LteDirectChat.defaultProps = defaultProps;

export default LteDirectChat;
