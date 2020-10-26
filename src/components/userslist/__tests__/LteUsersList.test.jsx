import React from 'react';
import { render } from '@testing-library/react';
import LteUsersList from '../LteUsersList';

test('Should render component without crash', () => {
  const dom = <LteUsersList />;
  const { container } = render(dom);

  expect(container.firstChild.nodeName).toEqual('UL');
  expect(container.firstChild.getAttribute('class')).toEqual('users-list');
  expect(container.firstChild.innerHTML).toEqual('');
});

test('Should render component with children', () => {
  const dom = <LteUsersList>Content</LteUsersList>;
  const { container } = render(dom);

  expect(container.firstChild).toHaveTextContent('Content');
});
