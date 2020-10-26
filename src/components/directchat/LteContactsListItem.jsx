import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const LteContactsListItem = ({ href, image, name, date, message }) => {
  return (
    <li>
      <Link to={href}>
        <img className='contacts-list-img' src={image} alt='' />

        <div className='contacts-list-info'>
          <span className='contacts-list-name'>
            {name}
            <small className='contacts-list-date float-right'>{date}</small>
          </span>
          <span className='contacts-list-msg'>{message}</span>
        </div>
      </Link>
    </li>
  );
};

LteContactsListItem.propTypes = propTypes;

export default LteContactsListItem;
