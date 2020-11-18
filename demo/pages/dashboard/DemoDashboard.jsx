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
} from 'reactstrap';
import LteContent from '../../../src/components/LteContent';
import LteContentHeader from '../../../src/components/LteContentHeader';
import LteInfoBox from '../../../src/components/LteInfoBox';
import { user1, user2, user3, user4, user5, user6, user7, user8 } from '../../data/images';
import LteDirectChatMsg from '../../../src/components/directchat/LteDirectChatMsg';
import LteDirectChatMessages from '../../../src/components/directchat/LteDirectChatMessages';
import LteDirectChat from '../../../src/components/directchat/LteDirectChat';
import LteDirectChatContacts from '../../../src/components/directchat/LteDirectChatContacts';
import LteContactsList from '../../../src/components/directchat/LteContactsList';
import LteContactsListItem from '../../../src/components/directchat/LteContactsListItem';
import LteCardTools from '../../../src/components/card/LteCardTools';
import LteUsersList from '../../../src/components/userslist/LteUsersList';
import LteUsersListItem from '../../../src/components/userslist/LteUsersListItem';
import { ChatMessages, ChatContacts } from '../../data/dashboard/dashboardDirectChatData';
import InfoboxTop from './components/InfoboxTop';
import Smallbox from './components/Smallbox';
import LatestOrder from './components/LatestOrder';

const DirectChatMsg = ({ data }) => {
  return data.map(({ name, date, image, message }) => {
    return <LteDirectChatMsg name={name} date={date} image={image} message={message} />;
  });
};

const DirectChatContacts = ({ data }) => {
  return data.map(({ href, image, name, date, message }) => {
    return <LteContactsListItem href={href} image={image} name={name} date={date} message={message} />;
  });
};

export default function DemoDashboard() {
  return (
    <>
      <LteContentHeader title='Dashboard' />
      <LteContent>
        <InfoboxTop />
        <Smallbox />

        <Row>
          <Col lg='8'>
            <LatestOrder />

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
                      <DirectChatMsg data={ChatMessages} />
                    </LteDirectChatMessages>
                    <LteDirectChatContacts>
                      <LteContactsList>
                        <DirectChatContacts data={ChatContacts} />
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
