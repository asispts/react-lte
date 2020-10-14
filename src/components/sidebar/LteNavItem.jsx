import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';
import LteIcon from '../LteIcon';

const Badge = ({ badge }) =>
  badge === '' ? null : (
    <span className='right badge badge-danger'>{badge}</span>
  );

export default function LteNavItem({ key, text, href, icon, badge }) {
  return (
    <NavItem key={key}>
      <NavLink tag={Link} to={href}>
        <LteIcon icon={icon} className='nav-icon' />
        <p>
          {text}
          <Badge badge={badge} />
        </p>
      </NavLink>
    </NavItem>
  );
}

LteNavItem.propTypes = {
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  badge: PropTypes.string,
};
LteNavItem.defaultProps = {
  icon: '',
  badge: '',
};

Badge.propTypes = {
  badge: PropTypes.string.isRequired,
};
