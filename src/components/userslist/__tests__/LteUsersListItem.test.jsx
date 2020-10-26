import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LteUsersListItem from '../LteUsersListItem';

const image = 'image.jpg';
const href = '/users';
const name = 'Test name';
const date = '2020-10-26';

test('Should render component without crash', () => {
  const dom = <LteUsersListItem image={image} href={href} name={name} date={date} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.firstChild.nodeName).toEqual('LI');
  expect(container.querySelector('img')).toHaveAttribute('src', image);
  expect(container.querySelector('a')).toHaveAttribute('href', href);
  expect(container.querySelector('a')).toHaveTextContent(name);
  expect(container.querySelector('.users-list-date')).toHaveTextContent(date);
});
