import React from 'react';
import { faTachometerAlt, faTh } from '@fortawesome/free-solid-svg-icons';
import LteMainSidebar from '../../components/sidebar/LteMainSidebar';
import LteNavSidebar from '../../components/sidebar/LteNavSidebar';
import LteSidebarUser from '../../components/sidebar/LteSidebarUser';
import { logo, user2 } from '../data/images';
import LteNavItem from '../../components/sidebar/LteNavItem';

export default function DemoSidebar() {
  return (
    <LteMainSidebar logo={logo} brandName='AdminLTE 3'>
      <LteSidebarUser avatar={user2} href='#' name='Alexander Pierce' />
      <LteNavSidebar>
        <LteNavItem
          key='dashboard-menu'
          href='/'
          text='Dashboard'
          icon={faTachometerAlt}
        />
        <LteNavItem
          key='widgets-menu'
          href='/widgets'
          text='Widgets'
          icon={faTh}
          badge='New'
        />
      </LteNavSidebar>
    </LteMainSidebar>
  );
}
