import React from 'react';
import { render } from '@testing-library/react';
import LteDirectChat from '../LteDirectChat';

test('Should render component without crash', () => {
  const dom = <LteDirectChat />;
  const { container } = render(dom);

  expect(container.firstChild.getAttribute('class')).toEqual('direct-chat card');
  expect(container.firstChild.innerHTML).toEqual('');
});

test('Should render component with children', () => {
  const dom = <LteDirectChat>Content</LteDirectChat>;
  const { container } = render(dom);

  expect(container.firstChild.innerHTML).toEqual('Content');
});

test('Should render component with bg color', () => {
  const dom = <LteDirectChat color='danger' />;
  const { container } = render(dom);

  expect(container.firstChild).toHaveClass('direct-chat-danger');
});
