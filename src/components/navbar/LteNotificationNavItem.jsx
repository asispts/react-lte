import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteText from '../LteText';

const propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
  message: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string,
};

const defaultProps = {
  href: '#',
};

const LteNotificationNavItem = ({ icon, message, date, href }) => {
  return (
    <>
      <DropdownItem tag='a' href={href}>
        <FontAwesomeIcon icon={icon} />
        <span className='ml-2'>{message}</span>
        <LteText className='float-right' size='sm' color='muted'>
          {date}
        </LteText>
      </DropdownItem>
      <DropdownItem divider />
    </>
  );
};

LteNotificationNavItem.propTypes = propTypes;
LteNotificationNavItem.defaultProps = defaultProps;

export default LteNotificationNavItem;
