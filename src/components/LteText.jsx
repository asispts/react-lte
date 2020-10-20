import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from 'reactstrap/src/utils';

const propTypes = {
  tag: tagPropType,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const defaultProps = {
  color: '',
  tag: 'p',
  className: '',
  size: '',
  children: null,
};

const LteText = (props) => {
  const { tag: Tag, color, className, children, size } = props;

  const textColor = color === '' ? undefined : `text-${color}`;
  const sizeClass = size === '' ? undefined : `text-${size}`;
  const classes = mapToCssModules(classNames(className, textColor, sizeClass));

  return <Tag className={classes}>{children}</Tag>;
};

LteText.propTypes = propTypes;
LteText.defaultProps = defaultProps;

export default LteText;
