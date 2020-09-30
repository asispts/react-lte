import React from 'react';

const Logo = require('admin-lte/dist/img/AdminLTELogo.png');

export default function MainSidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: 0.8 }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
    </aside>
  );
}
