import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  right: PropTypes.bool,
};

const defaultProps = {
  alt: '',
  right: false,
};

const LteDirectChatMsg = ({ name, date, message, image, alt, right }) => {
  let dcClass = '';
  let nameFloat = 'float-left';
  let timestampFloat = 'float-right';

  if (right === true) {
    dcClass = 'right';
    nameFloat = 'float-right';
    timestampFloat = 'float-left';
  }

  const classes = classNames('direct-chat-msg', dcClass);
  const chatNameClass = classNames('direct-chat-name', nameFloat);
  const timestampClass = classNames('direct-chat-timestamp', timestampFloat);
  return (
    <div className={classes}>
      <div className='direct-chat-infos clearfix'>
        <span className={chatNameClass}>{name}</span>
        <span className={timestampClass}>{date}</span>
      </div>
      <img className='direct-chat-img' src={image} alt={alt} />
      <div className='direct-chat-text'>{message}</div>
    </div>
  );
};

LteDirectChatMsg.propTypes = propTypes;
LteDirectChatMsg.defaultProps = defaultProps;

export default LteDirectChatMsg;
