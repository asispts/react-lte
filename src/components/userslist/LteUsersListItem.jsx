import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const LteUsersListItem = ({ image, href, name, date }) => {
  return (
    <li>
      <img src={image} alt='' />
      <Link to={href}>{name}</Link>
      <span className='users-list-date'>{date}</span>
    </li>
  );
};

LteUsersListItem.propTypes = propTypes;

export default LteUsersListItem;
