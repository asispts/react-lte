import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUp,
  faBars,
  faCloudDownloadAlt,
  faComments,
  faDownload,
  faMinus,
  faRedo,
  faShoppingCart,
  faTag,
  faTimes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
} from 'reactstrap';
import LteContent from '../../src/components/LteContent';
import LteContentHeader from '../../src/components/LteContentHeader';
import LteInfoBox from '../../src/components/LteInfoBox';
import LteSmallBox from '../../src/components/LteSmallBox';
import { user1, user2, user3, user4, user5, user6, user7, user8 } from '../data/images';
import LteDirectChatMsg from '../../src/components/directchat/LteDirectChatMsg';
import LteDirectChatMessages from '../../src/components/directchat/LteDirectChatMessages';
import LteDirectChat from '../../src/components/directchat/LteDirectChat';
import LteDirectChatContacts from '../../src/components/directchat/LteDirectChatContacts';
import LteContactsList from '../../src/components/directchat/LteContactsList';
import LteContactsListItem from '../../src/components/directchat/LteContactsListItem';
import LteCardTools from '../../src/components/card/LteCardTools';
import LteUsersList from '../../src/components/userslist/LteUsersList';
import LteUsersListItem from '../../src/components/userslist/LteUsersListItem';
import dashboardInfoBoxData from '../data/dashboard/dashboardInfoBoxData';
import dashboardSmallboxData from '../data/dashboard/dashboardSmallboxData';

const DashboardInfoBox = ({ data }) => {
  return data.map(({ icon, text, number, color }) => {
    return (
      <Col xs='12' sm='6' md='3'>
        <LteInfoBox icon={icon} text={text} number={number} iconColor={color} />
      </Col>
    );
  });
};

const DashboardSmallbox = ({ data }) => {
  return data.map(({ title, message, icon, color }) => {
    return (
      <Col lg='3' xs='6'>
        <LteSmallBox title={title} message={message} href='/info' icon={icon} color={color} />
      </Col>
    );
  });
};

export default function DemoDashboard() {
  return (
    <>
      <LteContentHeader title='Dashboard' />
      <LteContent>
        <Row>
          <DashboardInfoBox data={dashboardInfoBoxData} />
        </Row>
        <Row>
          <DashboardSmallbox data={dashboardSmallboxData} />
        </Row>

        <Row>
          <Col lg='8'>
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
                    <tr>
                      <td>OR9842</td>
                      <td>Call of Duty IV</td>
                      <td>
                        <Badge tag='span' color='success'>
                          Shipped
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#00a65a' data-height='20'>
                          90,80,90,-70,61,-83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR1848</td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <Badge tag='span' color='warning'>
                          Pending
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f39c12' data-height='20'>
                          90,80,-90,70,61,-83,68
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR7429</td>
                      <td>iPhone 6 Plus</td>
                      <td>
                        <Badge tag='span' color='danger'>
                          Delivered
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f56954' data-height='20'>
                          90,-80,90,70,-61,83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR7429</td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <Badge tag='span' color='info'>
                          Processing
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#00c0ef' data-height='20'>
                          90,80,-90,70,-61,83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR1848</td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <Badge tag='span' color='warning'>
                          Pending
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f39c12' data-height='20'>
                          90,80,-90,70,61,-83,68
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR7429</td>
                      <td>iPhone 6 Plus</td>
                      <td>
                        <Badge tag='span' color='danger'>
                          Delivered
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f56954' data-height='20'>
                          90,-80,90,70,-61,83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR9842</td>
                      <td>Call of Duty IV</td>
                      <td>
                        <Badge tag='span' color='success'>
                          Shipped
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#00a65a' data-height='20'>
                          90,80,90,-70,61,-83,63
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

            <Row>
              <Col lg='6'>
                <LteDirectChat color='warning'>
                  <CardHeader>
                    <CardTitle>Direct Chat</CardTitle>
                    <LteCardTools>
                      <Badge color='warning' data-toggle='tooltip' title='3 New Messages'>
                        3
                      </Badge>
                      <Button className='btn-tool' color='' data-card-widget='collapse'>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <Button
                        color=''
                        className='btn-tool'
                        data-toggle='tooltip'
                        title='Contacts'
                        data-widget='chat-pane-toggle'
                      >
                        <FontAwesomeIcon icon={faComments} />
                      </Button>
                      <Button color='' className='btn-tool' data-card-widget='remove'>
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    </LteCardTools>
                  </CardHeader>
                  <CardBody>
                    <LteDirectChatMessages>
                      <LteDirectChatMsg
                        name='Alexander Pierce'
                        date='23 Jan 2:00 pm'
                        image={user1}
                        message="Is this template really for free? That's unbelievable!"
                      />
                      <LteDirectChatMsg
                        right
                        name='Sarah Bullock'
                        date='23 Jan 2:05 pm'
                        image={user3}
                        message='You better believe it!'
                      />
                      <LteDirectChatMsg
                        name='Alexander Pierce'
                        date='23 Jan 5:37 pm'
                        image={user1}
                        message='Working with AdminLTE on a great new app! Wanna join?'
                      />
                      <LteDirectChatMsg
                        right
                        name='Sarah Bullock'
                        date='23 Jan 6:10 pm'
                        image={user3}
                        message='I would love to.'
                      />
                    </LteDirectChatMessages>
                    <LteDirectChatContacts>
                      <LteContactsList>
                        <LteContactsListItem
                          href='/contacts'
                          image={user1}
                          name='Count Dracula'
                          date='2/28/2015'
                          message='How have you been? I was...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user7}
                          name='Sarah Doe'
                          date='2/23/2015'
                          message='I will be waiting for...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user3}
                          name='Nadia Jolie'
                          date='2/20/2015'
                          message="I'll call you back at..."
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user5}
                          name='Nora S. Vans'
                          date='2/10/2015'
                          message='Where is your new...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user6}
                          name='John K.'
                          date='1/27/2015'
                          message='Can I take a look at...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user8}
                          name='Kenneth M.'
                          date='1/4/2015'
                          message='Never mind I found...'
                        />
                      </LteContactsList>
                    </LteDirectChatContacts>
                  </CardBody>
                  <CardFooter>
                    <Form>
                      <InputGroup>
                        <Input placeholder='Type Message ...' />
                        <InputGroupAddon addonType='append'>
                          <Button color='warning'>Send</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Form>
                  </CardFooter>
                </LteDirectChat>
              </Col>
              <Col lg='6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Members</CardTitle>
                    <LteCardTools>
                      <Badge color='danger'>8 New Members</Badge>
                      <Button className='btn-tool' color='' data-card-widget='collapse'>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <Button color='' className='btn-tool' data-card-widget='remove'>
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    </LteCardTools>
                  </CardHeader>
                  <CardBody className='p-0'>
                    <LteUsersList>
                      <LteUsersListItem image={user1} href='/users' name='Alexander Pierce' date='Today' />
                      <LteUsersListItem image={user8} href='/users' name='Norman' date='Yesterday' />
                      <LteUsersListItem image={user7} href='/users' name='Jane' date='12 Jan' />
                      <LteUsersListItem image={user6} href='/users' name='John' date='12 Jan' />
                      <LteUsersListItem image={user2} href='/users' name='Alexander' date='13 Jan' />
                      <LteUsersListItem image={user5} href='/users' name='Sarah' date='14 Jan' />
                      <LteUsersListItem image={user4} href='/users' name='Nora' date='15 Jan' />
                      <LteUsersListItem image={user3} href='/users' name='Nadia' date='15 Jan' />
                    </LteUsersList>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg='4'>
            <LteInfoBox icon={faTag} text='Inventory' number='5,200' bgColor='warning' />
            <LteInfoBox icon={faHeart} text='Mentions' number='92,050' bgColor='success' />
            <LteInfoBox icon={faCloudDownloadAlt} text='Downloads' number='114,381' bgColor='danger' />
            <LteInfoBox icon={faComment} text='Direct Messages' number='163,921' bgColor='info' />
            <Card>
              <CardHeader className='border-0'>
                <CardTitle>Online Store Overview</CardTitle>
                <LteCardTools>
                  <Button className='btn-tool' color=''>
                    <FontAwesomeIcon icon={faDownload} />
                  </Button>
                  <Button color='' className='btn-tool'>
                    <FontAwesomeIcon icon={faBars} />
                  </Button>
                </LteCardTools>
              </CardHeader>
              <CardBody>
                <div className='d-flex justify-content-between align-items-center border-bottom mb-3'>
                  <p className='text-success text-xl'>
                    <FontAwesomeIcon icon={faRedo} />
                  </p>
                  <p className='d-flex flex-column text-right'>
                    <span className='font-weight-bold'>
                      <FontAwesomeIcon icon={faArrowUp} className='text-success' />
                      12%
                    </span>
                    <span className='text-muted'>CONVERSION RATE</span>
                  </p>
                </div>
                <div className='d-flex justify-content-between align-items-center border-bottom mb-3'>
                  <p className='text-warning text-xl'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </p>
                  <p className='d-flex flex-column text-right'>
                    <span className='font-weight-bold'>
                      <FontAwesomeIcon icon={faArrowUp} className='text-warning' /> 0.8%
                    </span>
                    <span className='text-muted'>SALES RATE</span>
                  </p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-0'>
                  <p className='text-danger text-xl'>
                    <FontAwesomeIcon icon={faUsers} />
                  </p>
                  <p className='d-flex flex-column text-right'>
                    <span className='font-weight-bold'>
                      <FontAwesomeIcon icon={faArrowUp} className='text-danger' /> 1%
                    </span>
                    <span className='text-muted'>REGISTRATION RATE</span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </LteContent>
    </>
  );
}
