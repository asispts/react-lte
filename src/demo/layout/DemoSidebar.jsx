import React from 'react';
import LteMainSidebar from '../../components/sidebar/LteMainSidebar';
import LteNavSidebar from '../../components/sidebar/LteNavSidebar';
import LteSidebarUser from '../../components/sidebar/LteSidebarUser';
import { logo, user2 } from '../data/images';
import LteNavSidebarItem from '../../components/sidebar/LteNavSidebarItem';
import sidebarMenu from '../data/sidebar';

export default function DemoSidebar() {
  return (
    <LteMainSidebar logo={logo} brandName="AdminLTE 3">
      <LteSidebarUser avatar={user2} href="#" name="Alexander Pierce" />
      <LteNavSidebar>
        <LteNavSidebarItem data={sidebarMenu} />
      </LteNavSidebar>
    </LteMainSidebar>
  );
}
