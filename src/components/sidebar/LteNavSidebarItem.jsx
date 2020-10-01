import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';
import LteIcon from '../LteIcon';

const Badge = ({ badge }) => (badge === '' ? null : <span className="right badge badge-danger">{badge}</span>);

export default function LteNavSidebarItem({ data }) {
  return data.map(({
    id, text, href, icon, badge,
  }) => (
    <NavItem key={id}>
      <NavLink href={href}>
        <LteIcon icon={icon} className="nav-icon" />
        <p>
          {text}
          <Badge badge={badge} />
        </p>
      </NavLink>
    </NavItem>
  ));
}

LteNavSidebarItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
      badge: PropTypes.string,
    }),
  ),
};
LteNavSidebarItem.defaultProps = {
  data: [],
};

Badge.propTypes = {
  badge: PropTypes.string,
};
Badge.defaultProps = {
  badge: '',
};
