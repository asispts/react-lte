import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LteMessageNavItem from '../LteMessageNavItem';
import { user1 } from '../../../../demo/data/images';

const avatar = 'user1-128x128.jpg';
const user = 'Username';
const message = 'Message';
const date = '1 day ago';
const href = '/default';

test('Should render component with required properties', () => {
  const dom = <LteMessageNavItem avatar={user1} user={user} message={message} date={date} href={href} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.querySelector('a').getAttribute('href')).toEqual('/default');
  expect(container.querySelector('img').getAttribute('src')).toEqual(avatar);
  expect(container.querySelector('.dropdown-item-title').innerHTML).toContain(user);
  expect(container.querySelector('p:not([class*="text-muted"])').innerHTML).toEqual(message);
  expect(container.querySelector('p[class*="text-muted"] > span').innerHTML).toEqual(date);
});

test('Should render component with default text color', () => {
  const dom = <LteMessageNavItem avatar={user1} user={user} message={message} date={date} href={href} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.querySelector('.dropdown-item-title > p').getAttribute('class')).toContain('text-muted');
});

test('Should render component with color danger', () => {
  const dom = (
    <LteMessageNavItem avatar={user1} user={user} message={message} date={date} href={href} textColor='danger' />
  );
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.querySelector('.dropdown-item-title > p').getAttribute('class')).toContain('text-danger');
});
