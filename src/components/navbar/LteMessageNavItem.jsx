import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem, Media } from 'reactstrap';
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
  href: PropTypes.string,
};

const defaultProps = {
  textColor: 'muted',
  href: '#',
};

const LteMessageNavItem = ({
  avatar,
  user,
  message,
  date,
  textColor,
  href,
}) => {
  return (
    <>
      <DropdownItem tag='a' href={href}>
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
      </DropdownItem>
      <DropdownItem divider />
    </>
  );
};

LteMessageNavItem.propTypes = propTypes;
LteMessageNavItem.defaultProps = defaultProps;

export default LteMessageNavItem;
