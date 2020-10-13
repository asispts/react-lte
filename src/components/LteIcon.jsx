import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LteIcon({ icon, className }) {
  return icon === '' ? null : (
    <FontAwesomeIcon icon={icon} className={className} />
  );
}

LteIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};
LteIcon.defaultProps = {
  className: '',
  icon: '',
};
