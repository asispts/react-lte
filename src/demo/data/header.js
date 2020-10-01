import { user1, user3, user8 } from './images';

const messageNavData = [
  {
    id: 1,
    avatar: user1,
    user: 'Brad Diesel',
    message: 'Call me whenever you can...',
    date: '4 Hours Ago',
  },
  {
    id: 2,
    avatar: user8,
    user: 'John Pierce',
    message: 'I got your message bro',
    date: '4 Hours Ago',
  },
  {
    id: 3,
    avatar: user3,
    user: 'Nora Silvester',
    message: 'The subject goes here',
    date: '4 Hours Ago',
  },
];

const notifNavData = [
  {
    id: 1,
    message: '4 new messages',
    date: '3 mins',
  },
  {
    id: 2,
    message: '8 friend requests',
    date: '12 hours',
  },
  {
    id: 3,
    message: '3 new reports',
    date: '2 days',
  },
];

export { messageNavData, notifNavData };
