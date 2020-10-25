import React from 'react';
import PropTypes from 'prop-types';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { DropdownItem } from 'reactstrap';
import { faEnvelope, faFile, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LteNavDropdown from '../../components/navbar/LteNavDropdown';
import LteNotificationNavItem from '../../components/navbar/LteNotificationNavItem';

const demoData = [
  {
    id: 1,
    icon: faEnvelope,
    message: '4 new messages',
    date: '3 mins',
    href: '/notification/1',
  },
  {
    id: 2,
    icon: faUsers,
    message: '8 friend requests',
    date: '12 hours',
    href: '/notification/2',
  },
  {
    id: 3,
    icon: faFile,
    message: '3 new reports',
    date: '2 days',
    href: '/notification/3',
  },
];

const propTypes = {
  href: PropTypes.string.isRequired,
};

const Content = ({ data }) => {
  return data.map(({ id, icon, message, date, href }) => {
    return <LteNotificationNavItem id={id} icon={icon} message={message} date={date} key={id} href={href} />;
  });
};

const NotificationMenu = ({ href }) => {
  return (
    <LteNavDropdown icon={faBell} badgeText='15' badgeColor='warning'>
      <DropdownItem tag='span' header>
        15 Notifications
      </DropdownItem>
      <DropdownItem divider />
      <Content data={demoData} />
      <DropdownItem tag={Link} to={href} className='dropdown-footer'>
        See All Notifications
      </DropdownItem>
    </LteNavDropdown>
  );
};

NotificationMenu.propTypes = propTypes;

export default NotificationMenu;
