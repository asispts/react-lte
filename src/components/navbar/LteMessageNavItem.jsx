import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import LteText from '../LteText';

const propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

const defaultProps = {
  textColor: 'muted',
};

const LteMessageNavItem = ({ avatar, user, message, date, textColor }) => {
  return (
    <Media>
      <img src={avatar} alt='' className='img-size-50 mr-3 img-circle' />
      <Media body>
        <h3 className='dropdown-item-title'>
          {user}
          <LteText className='float-right' size='sm' color={textColor}>
            <FontAwesomeIcon icon={faStar} />
          </LteText>
        </h3>
        <LteText size='sm'>{message}</LteText>
        <LteText size='sm' color='muted'>
          <FontAwesomeIcon icon={faClock} />
          <span className='ml-1'>{date}</span>
        </LteText>
      </Media>
    </Media>
  );
};

LteMessageNavItem.propTypes = propTypes;
LteMessageNavItem.defaultProps = defaultProps;

export default LteMessageNavItem;
