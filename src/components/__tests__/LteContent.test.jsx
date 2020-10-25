import React from 'react';
import { render } from '@testing-library/react';
import LteContent from '../LteContent';

test('Should render component without crash', () => {
  const dom = <LteContent />;
  const { container } = render(dom);

  expect(container.firstChild.getAttribute('class')).toEqual('content');
  expect(container.querySelector('.content').firstChild.getAttribute('class')).toEqual('container-fluid');
  expect(container.querySelector('.container-fluid')).toHaveTextContent('');
});

test('Should render component with children', () => {
  const dom = <LteContent>Content</LteContent>;
  const { container } = render(dom);

  expect(container.querySelector('.container-fluid')).toHaveTextContent('Content');
});
