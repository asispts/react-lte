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
  iconColor: PropTypes.string,
  bgColor: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  iconColor: '',
  bgColor: '',
};

const LteInfoBox = ({ tag: Tag, icon, text, number, iconColor, bgColor }) => {
  const bgClass = bgColor === '' ? undefined : `bg-${bgColor}`;
  const boxClasses = classNames('info-box', bgClass);

  const iconClass = iconColor === '' ? undefined : `elevation-1 bg-${iconColor}`;
  const iconClasses = classNames('info-box-icon', iconClass);

  return (
    <Tag className={boxClasses}>
      <span className={iconClasses}>
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
