import React from 'react';
import { faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap';
import LteCardTools from '../../../../src/components/card/LteCardTools';

const mockData = [
  {
    orderID: 'OR9842',
    item: 'Call of Duty IV',
    status: 'Shipped',
    statusColor: 'success',
    popularity: '90,80,90,-70,61,-83,63',
  },
  {
    orderID: 'OR1848',
    item: 'Samsung Smart TV',
    status: 'Pending',
    statusColor: 'warning',
    popularity: '90,80,-90,70,61,-83,68',
  },
  {
    orderID: 'OR7429',
    item: 'iPhone 6 Plus',
    status: 'Delivered',
    statusColor: 'danger',
    popularity: '90,-80,90,70,-61,83,63',
  },
  {
    orderID: 'OR7429',
    item: 'Samsung Smart TV',
    status: 'Processing',
    statusColor: 'info',
    popularity: '90,80,-90,70,-61,83,63',
  },
  {
    orderID: 'OR1848',
    item: 'Samsung Smart TV',
    status: 'Pending',
    statusColor: 'warning',
    popularity: '90,80,-90,70,61,-83,68',
  },
  {
    orderID: 'OR7429',
    item: 'iPhone 6 Plus',
    status: 'Delivered',
    statusColor: 'danger',
    popularity: '90,-80,90,70,-61,83,63',
  },
  {
    orderID: 'OR9842',
    item: 'Call of Duty IV',
    status: 'Shipped',
    statusColor: 'success',
    popularity: '90,80,90,-70,61,-83,63',
  },
];

const Item = ({ data }) => {
  return data.map(({ orderID, item, status, statusColor, popularity }) => {
    return (
      <tr>
        <td>{orderID}</td>
        <td>{item}</td>
        <td>
          <Badge tag='span' color={statusColor}>
            {status}
          </Badge>
        </td>
        <td>
          <div className='sparkbar' data-color='#00a65a' data-height='20'>
            {popularity}
          </div>
        </td>
      </tr>
    );
  });
};

const LatestOrder = () => {
  return (
    <Card>
      <CardHeader className='border-transparent'>
        <CardTitle>Latest Orders</CardTitle>
        <LteCardTools>
          <Button color='' className='btn-tool' data-card-widget='collapse'>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <Button color='' className='btn-tool' data-card-widget='remove'>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </LteCardTools>
      </CardHeader>
      <CardBody className='p-0'>
        <Table responsive>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Status</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <Item data={mockData} />
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default LatestOrder;
