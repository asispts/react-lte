import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import LteNavDropdown from './LteNavDropdown';

const Content = ({ data }) =>
  data.map(({ id, href, message, date }) => (
    <span key={id}>
      <DropdownItem tag='a' href={href}>
        {message}
        <span className='float-right text-muted text-sm'>{date}</span>
      </DropdownItem>
      <DropdownItem divider />
    </span>
  ));

export default function LteNotifNavMenu({ data, href }) {
  return (
    <LteNavDropdown icon={faBell} badgeText='0'>
      <DropdownItem tag='span' header>
        15 Notifications
      </DropdownItem>
      <DropdownItem divider />
      <Content data={data} />
      <DropdownItem tag='a' href={href} className='dropdown-footer'>
        See All Notifications
      </DropdownItem>
    </LteNavDropdown>
  );
}

LteNotifNavMenu.propTypes = {
  href: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      href: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

LteNotifNavMenu.defaultProps = {
  href: '#',
  data: [],
};
