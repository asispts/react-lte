import React from 'react';
import { render } from '@testing-library/react';
import LteDirectChatMsg from '../LteDirectChatMsg';

const name = 'Test name';
const date = '2020-10-26';
const message = 'Test message';
const image = 'test.jpg';

test('Should render component without crash', () => {
  const dom = <LteDirectChatMsg name={name} date={date} message={message} image={image} />;
  const { container } = render(dom);

  expect(container.querySelector('.direct-chat-name')).toHaveTextContent(name);
  expect(container.querySelector('.direct-chat-timestamp')).toHaveTextContent(date);
  expect(container.querySelector('.direct-chat-img')).toHaveAttribute('src', image);
  expect(container.querySelector('.direct-chat-text')).toHaveTextContent(message);
});

test('Should render component with default props', () => {
  const dom = <LteDirectChatMsg name={name} date={date} message={message} image={image} />;
  const { container } = render(dom);

  expect(container.firstChild.getAttribute('class')).toEqual('direct-chat-msg');
  expect(container.querySelector('.direct-chat-name')).toHaveClass('float-left');
  expect(container.querySelector('.direct-chat-timestamp')).toHaveClass('float-right');
  expect(container.querySelector('.direct-chat-img')).toHaveAttribute('alt', '');
});

test('Should render component with right aligned', () => {
  const dom = <LteDirectChatMsg name={name} date={date} message={message} image={image} right />;
  const { container } = render(dom);

  expect(container.firstChild).toHaveClass('right');
  expect(container.querySelector('.direct-chat-name')).toHaveClass('float-right');
  expect(container.querySelector('.direct-chat-timestamp')).toHaveClass('float-left');
});
