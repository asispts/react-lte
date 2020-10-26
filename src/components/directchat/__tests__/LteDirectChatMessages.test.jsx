import React from 'react';
import { render } from '@testing-library/react';
import LteDirectChatMessages from '../LteDirectChatMessages';

test('Should render component without crash', () => {
  const dom = <LteDirectChatMessages />;
  const { container } = render(dom);

  expect(container.firstChild.getAttribute('class')).toEqual('direct-chat-messages');
  expect(container.firstChild.innerHTML).toEqual('');
});

test('Should render component with children', () => {
  const dom = <LteDirectChatMessages>Content</LteDirectChatMessages>;
  const { container } = render(dom);

  expect(container.firstChild).toHaveTextContent('Content');
});
