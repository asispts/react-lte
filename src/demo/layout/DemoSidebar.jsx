import React from 'react';
import LteMainSidebar from '../../components/sidebar/LteMainSidebar';
import LteSidebarUser from '../../components/sidebar/LteSidebarUser';
import { logo, user2 } from '../data/images';

export default function DemoSidebar() {
  return (
    <LteMainSidebar logo={logo} brandName="AdminLTE 3">
      <LteSidebarUser avatar={user2} href="#" name="Alexander Pierce" />
    </LteMainSidebar>
  );
}
