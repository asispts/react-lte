import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import tagPropType from '../utils/Types';

const propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
  tag: tagPropType,
  color: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  color: '',
};

const LteSmallBox = ({ tag: Tag, color, title, message, icon, href }) => {
  const bgColor = color === '' ? undefined : `bg-${color}`;
  const classes = classNames('small-box', bgColor);
  return (
    <Tag className={classes}>
      <div className='inner'>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} className='fa-5x' style={{ position: 'absolute', right: '15px', top: '20px' }} />
      </div>
      <Link className='small-box-footer' to={href}>
        <span>More Info </span>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </Link>
    </Tag>
  );
};

LteSmallBox.propTypes = propTypes;
LteSmallBox.defaultProps = defaultProps;

export default LteSmallBox;
