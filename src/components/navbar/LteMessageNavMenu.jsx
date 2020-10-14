import React from 'react';
import PropTypes from 'prop-types';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import {
  faComments as farComments,
  faClock as farClock,
} from '@fortawesome/free-regular-svg-icons';
import { DropdownItem, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteNavDropdown from './LteNavDropdown';

const Content = ({ data }) =>
  data.map(({ id, href, avatar, user, message, date }) => (
    <span key={id}>
      <DropdownItem tag='a' href={href}>
        <Media>
          <img src={avatar} alt='' className='img-size-50 mr-3 img-circle' />
          <Media body>
            <h3 className='dropdown-item-title'>
              {user}
              <span className='float-right text-sm text-danger'>
                <FontAwesomeIcon icon={fasStar} />
              </span>
            </h3>
            <p className='text-sm'>{message}</p>
            <p className='text-sm text-muted'>
              <FontAwesomeIcon icon={farClock} />
              <span className='ml-1'>{date}</span>
            </p>
          </Media>
        </Media>
      </DropdownItem>
      <DropdownItem divider />
    </span>
  ));

export default function LteMessageNavMenu({ data, href }) {
  return (
    <LteNavDropdown icon={farComments} badgeText={data.length}>
      <Content data={data} />
      <DropdownItem tag='a' href={href} className='dropdown-footer'>
        See All Messages
      </DropdownItem>
    </LteNavDropdown>
  );
}

LteMessageNavMenu.propTypes = {
  href: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      href: PropTypes.string,
      avatar: PropTypes.string,
      user: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

LteMessageNavMenu.defaultProps = {
  href: '#',
  data: [],
};
