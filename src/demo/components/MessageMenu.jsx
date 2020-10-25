import React from 'react';
import PropTypes from 'prop-types';
import { faComments as farComments } from '@fortawesome/free-regular-svg-icons';
import { DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import LteNavDropdown from '../../components/navbar/LteNavDropdown';
import LteMessageNavItem from '../../components/navbar/LteMessageNavItem';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      href: PropTypes.string,
      avatar: PropTypes.string,
      user: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  href: PropTypes.string.isRequired,
};

const Content = ({ data }) => {
  return data.map(({ id, href, avatar, user, message, date, color }) => {
    return (
      <LteMessageNavItem
        avatar={avatar}
        user={user}
        message={message}
        date={date}
        textColor={color}
        href={href}
        key={id}
      />
    );
  });
};

const MessageMenu = ({ data, href }) => {
  return (
    <LteNavDropdown icon={farComments} badgeText={data.length} badgeColor='danger'>
      <Content data={data} />
      <DropdownItem tag={Link} to={href} className='dropdown-footer'>
        See All Messages
      </DropdownItem>
    </LteNavDropdown>
  );
};

MessageMenu.propTypes = propTypes;

export default MessageMenu;
