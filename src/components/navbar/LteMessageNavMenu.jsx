import React from 'react';
import PropTypes from 'prop-types';
import { faClock, faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { DropdownItem, Media } from 'reactstrap';
import LteNavDropdown from './LteNavDropdown';
import LteIcon from '../LteIcon';

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
                <LteIcon icon={faStar} />
              </span>
            </h3>
            <p className='text-sm'>{message}</p>
            <p className='text-sm text-muted'>
              <LteIcon icon={faClock} />
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
    <LteNavDropdown icon={faComments} badgeText={data.length}>
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
