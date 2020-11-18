import React from 'react';
import {
  Badge,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { faComments, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteCardTools from '../../../../src/components/card/LteCardTools';
import LteContactsListItem from '../../../../src/components/directchat/LteContactsListItem';
import LteDirectChatMsg from '../../../../src/components/directchat/LteDirectChatMsg';
import LteDirectChat from '../../../../src/components/directchat/LteDirectChat';
import LteDirectChatMessages from '../../../../src/components/directchat/LteDirectChatMessages';
import LteDirectChatContacts from '../../../../src/components/directchat/LteDirectChatContacts';
import LteContactsList from '../../../../src/components/directchat/LteContactsList';
import { user1, user3, user5, user6, user7, user8 } from '../../../data/images';

const messageData = [
  {
    name: 'Alexander Pierce',
    date: '23 Jan 2:00 pm',
    image: user1,
    message: "Is this template really for free? That's unbelievable!",
  },
  {
    name: 'Sarah Bullock',
    date: '23 Jan 2:05 pm',
    image: user3,
    message: 'You better believe it!',
  },
  {
    name: 'Alexander Pierce',
    date: '23 Jan 5:37 pm',
    image: user1,
    message: 'Working with AdminLTE on a great new app! Wanna join?',
  },
  {
    name: 'Sarah Bullock',
    date: '23 Jan 6:10 pm',
    image: user3,
    message: 'I would love to.',
  },
];

const contactData = [
  {
    href: '/contacts',
    image: user1,
    name: 'Count Dracula',
    date: '2/28/2015',
    message: 'How have you been? I was...',
  },
  {
    href: '/contacts',
    image: user7,
    name: 'Sarah Doe',
    date: '2/23/2015',
    message: 'I will be waiting for...',
  },
  {
    href: '/contacts',
    image: user3,
    name: 'Nadia Jolie',
    date: '2/20/2015',
    message: "I'll call you back at...",
  },
  {
    href: '/contacts',
    image: user5,
    name: 'Nora S. Vans',
    date: '2/10/2015',
    message: 'Where is your new...',
  },
  {
    href: '/contacts',
    image: user6,
    name: 'John K.',
    date: '1/27/2015',
    message: 'Can I take a look at...',
  },
  {
    href: '/contacts',
    image: user8,
    name: 'Kenneth M.',
    date: '1/4/2015',
    message: 'Never mind I found...',
  },
];

const MessageItem = ({ data }) => {
  return data.map(({ name, date, image, message }) => {
    return <LteDirectChatMsg name={name} date={date} image={image} message={message} />;
  });
};

const ContactItem = ({ data }) => {
  return data.map(({ href, image, name, date, message }) => {
    return <LteContactsListItem href={href} image={image} name={name} date={date} message={message} />;
  });
};

const DirectChat = () => {
  return (
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
          <Button color='' className='btn-tool' data-toggle='tooltip' title='Contacts' data-widget='chat-pane-toggle'>
            <FontAwesomeIcon icon={faComments} />
          </Button>
          <Button color='' className='btn-tool' data-card-widget='remove'>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </LteCardTools>
      </CardHeader>
      <CardBody>
        <LteDirectChatMessages>
          <MessageItem data={messageData} />
        </LteDirectChatMessages>
        <LteDirectChatContacts>
          <LteContactsList>
            <ContactItem data={contactData} />
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
  );
};

export default DirectChat;
