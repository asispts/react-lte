import React from 'react';
import { render } from '@testing-library/react';
import LteCardTools from '../LteCardTools';

test('Should render component without crash', () => {
  const dom = <LteCardTools />;
  const { container } = render(dom);

  expect(container.firstChild.getAttribute('class')).toEqual('card-tools');
  expect(container.firstChild.innerHTML).toEqual('');
});

test('Should render component with children', () => {
  const dom = <LteCardTools>Content</LteCardTools>;
  const { container } = render(dom);

  expect(container.firstChild).toHaveTextContent('Content');
});
