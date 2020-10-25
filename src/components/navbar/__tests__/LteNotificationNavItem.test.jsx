import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LteNotificationNavItem from '../LteNotificationNavItem';

const message = 'Message';
const date = '1 day ago';
const href = '/default';

test('Should render component without crash', () => {
  const dom = <LteNotificationNavItem icon={faEnvelope} message={message} date={date} href={href} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.querySelector('a').getAttribute('href')).toEqual('/default');
  expect(container.querySelector('svg').getAttribute('class')).toContain('fa-envelope');
  expect(container.querySelector('span').innerHTML).toEqual(message);
  expect(container.querySelector('p').innerHTML).toEqual(date);
});
