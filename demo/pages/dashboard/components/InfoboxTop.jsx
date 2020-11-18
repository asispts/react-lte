import React from 'react';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import LteInfoBox from '../../../../src/components/LteInfoBox';

const data = [
  {
    icon: 'cog',
    text: 'CPU Traffic',
    number: '10%',
    color: 'info',
  },
  {
    icon: 'thumbs-up',
    text: 'Likes',
    number: '41,410',
    color: 'danger',
  },
  {
    icon: 'shopping-cart',
    text: 'Sales',
    number: '760',
    color: 'success',
  },
  {
    icon: 'users',
    text: 'New Members',
    number: '2,000',
    color: 'warning',
  },
];

const Item = ({ infoData }) => {
  return infoData.map(({ icon, text, number, color }) => {
    return (
      <Col xs='12' sm='6' md='3'>
        <LteInfoBox icon={icon} text={text} number={number} iconColor={color} />
      </Col>
    );
  });
};

const InfoboxTop = () => {
  return (
    <Row>
      <Item infoData={data} />
    </Row>
  );
};

export default InfoboxTop;
