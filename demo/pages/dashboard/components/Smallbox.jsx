import React from 'react';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import LteSmallBox from '../../../../src/components/LteSmallBox';

const mockData = [
  {
    title: '150',
    message: 'New Orders',
    icon: 'shopping-basket',
    color: 'info',
  },
  {
    title: '53%',
    message: 'Bounce Rate',
    icon: 'chart-bar',
    color: 'success',
  },
  {
    title: '44',
    message: 'User Registrations',
    icon: 'user-plus',
    color: 'warning',
  },
  {
    title: '65',
    message: 'Unique Visitors',
    icon: 'chart-pie',
    color: 'danger',
  },
];

const Item = ({ data }) => {
  return data.map(({ title, message, icon, color }) => {
    return (
      <Col lg='3' xs='6'>
        <LteSmallBox title={title} message={message} href='/info' icon={icon} color={color} />
      </Col>
    );
  });
};

const Smallbox = () => {
  return (
    <Row>
      <Item data={mockData} />
    </Row>
  );
};

export default Smallbox;
