import React from 'react';
import { render } from '@testing-library/react';
import LteDirectChatContacts from '../LteDirectChatContacts';

test('Should render component without crash', () => {
  const dom = <LteDirectChatContacts />;
  const { container } = render(dom);

  expect(container.firstChild.getAttribute('class')).toEqual('direct-chat-contacts');
  expect(container.firstChild.innerHTML).toEqual('');
});

test('Should render component with children', () => {
  const dom = <LteDirectChatContacts>Content</LteDirectChatContacts>;
  const { container } = render(dom);

  expect(container.firstChild).toHaveTextContent('Content');
});
