import React from 'react';
import { render } from '@testing-library/react';
import LteContactsList from '../LteContactsList';

test('Should render component without crash', () => {
  const dom = <LteContactsList />;
  const { container } = render(dom);

  expect(container.firstChild.nodeName).toEqual('UL');
  expect(container.firstChild.getAttribute('class')).toEqual('contacts-list');
  expect(container.firstChild.innerHTML).toEqual('');
});

test('Should render component with children', () => {
  const dom = <LteContactsList>Content</LteContactsList>;
  const { container } = render(dom);

  expect(container.firstChild).toHaveTextContent('Content');
});
