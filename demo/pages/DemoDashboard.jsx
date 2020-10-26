import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faChartPie, faShoppingBasket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Row } from 'reactstrap';
import LteContent from '../../src/components/LteContent';
import LteContentHeader from '../../src/components/LteContentHeader';
import LteSmallBox from '../../src/components/LteSmallBox';

export default function DemoDashboard() {
  return (
    <>
      <LteContentHeader title='Dashboard' />
      <LteContent>
        <Row>
          <Col lg='3' xs='6'>
            <LteSmallBox title='150' message='New Orders' href='/info' icon={faShoppingBasket} color='info' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='53%' message='Bounce Rate' href='/info' icon={faChartBar} color='success' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='44' message='User Registrations' href='/info' icon={faUserPlus} color='warning' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='65' message='Unique Visitors' href='/info' icon={faChartPie} color='danger' />
          </Col>
        </Row>
      </LteContent>
    </>
  );
}
