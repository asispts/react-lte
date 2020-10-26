import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tagPropType from '../utils/Types';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  tag: tagPropType,
  color: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  color: '',
};

const LteInfoBox = ({ tag: Tag, icon, text, number, color }) => {
  const bgColor = color === '' ? undefined : `bg-${color}`;
  const classes = classNames('info-box-icon elevation-1', bgColor);

  return (
    <Tag className='info-box'>
      <span className={classes}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className='info-box-content'>
        <span className='info-box-text'>{text}</span>
        <span className='info-box-number'>{number}</span>
      </div>
    </Tag>
  );
};

LteInfoBox.propTypes = propTypes;
LteInfoBox.defaultProps = defaultProps;

export default LteInfoBox;
