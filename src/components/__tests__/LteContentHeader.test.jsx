import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LteContentHeader from '../LteContentHeader';

test('Should render component without crash', () => {
  const dom = <LteContentHeader title='Test Title' />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.querySelector('h1').innerHTML).toEqual('Test Title');
  expect(container.querySelector('.breadcrumb > .active').innerHTML).toEqual('Test Title');
});
