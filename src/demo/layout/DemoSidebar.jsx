import React from 'react';
import {
  faAngleLeft,
  faChartPie,
  faCopy,
  faEdit,
  faTable,
  faTachometerAlt,
  faTh,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import { Badge, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteMainSidebar from '../../components/sidebar/LteMainSidebar';
import LteNavSidebar from '../../components/sidebar/LteNavSidebar';
import LteSidebarUser from '../../components/sidebar/LteSidebarUser';
import { logo, user2 } from '../data/images';

export default function DemoSidebar() {
  return (
    <LteMainSidebar logo={logo} brandName='AdminLTE 3'>
      <LteSidebarUser avatar={user2} href='#' name='Alexander Pierce' />

      <LteNavSidebar>
        <NavItem>
          <NavLink tag={Link} to='/'>
            <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' />
            <p>Dashboard</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faTh} className='nav-icon' />
            <p>
              Widgets
              <Badge color='danger' className='right'>
                New
              </Badge>
            </p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faCopy} className='nav-icon' />
            <p>
              Layout Options
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
              <Badge color='info' className='right'>
                6
              </Badge>
            </p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faChartPie} className='nav-icon' />
            <p>
              Charts
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faTree} className='nav-icon' />
            <p>
              UI Elements
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faEdit} className='nav-icon' />
            <p>
              Forms
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faTable} className='nav-icon' />
            <p>
              Tables
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
        </NavItem>
      </LteNavSidebar>
    </LteMainSidebar>
  );
}
