import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  avatar: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
};

const defaultProps = {
  avatar: '',
  href: '',
  name: '',
};

const SidebarUser = ({ avatar, href, name }) => {
  return (
    <section className='user-panel mt-3 pb-3 mb-3 d-flex'>
      <div className='image'>
        <img src={avatar} className='img-circle elevation-2' alt='' />
      </div>
      <div className='info'>
        <a href={href} className='d-block'>
          {name}
        </a>
      </div>
    </section>
  );
};

SidebarUser.propTypes = propTypes;
SidebarUser.defaultProps = defaultProps;

export default SidebarUser;
