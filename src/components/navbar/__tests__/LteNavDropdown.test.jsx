import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import LteNavDropdown from '../LteNavDropdown';

test('Should render component without crash', () => {
  const dom = <LteNavDropdown icon={faComments}>Content</LteNavDropdown>;
  const { container } = render(dom);

  expect(container.querySelector('.nav-link > svg').classList).toContain('fa-comments');
  expect(container.querySelector('.dropdown-menu')).toHaveTextContent('Content');
});

test('Should render component with optional properties', () => {
  const dom = <LteNavDropdown icon={faComments}>Content</LteNavDropdown>;
  const { container } = render(dom);

  expect(container.querySelector('.navbar-badge')).toHaveTextContent('0');
  expect(container.querySelector('.navbar-badge').classList).toContain('badge-info');
});

test('Should render component with badge text', () => {
  const dom = (
    <LteNavDropdown icon={faComments} badgeText='value'>
      Content
    </LteNavDropdown>
  );
  const { container } = render(dom);

  expect(container.querySelector('.navbar-badge')).toHaveTextContent('value');
});

test('Should render component with badge color', () => {
  const dom = (
    <LteNavDropdown icon={faComments} badgeColor='danger'>
      Content
    </LteNavDropdown>
  );
  const { container } = render(dom);

  expect(container.querySelector('.navbar-badge').classList).toContain('badge-danger');
});

test('Should display dropdown content when receive click event', () => {
  const dom = (
    <LteNavDropdown icon={faComments} badgeColor='danger'>
      Content
    </LteNavDropdown>
  );
  const { container } = render(dom);
  const navLink = container.querySelector('.nav-link');

  expect(container.firstChild.classList).not.toContain('show');

  fireEvent.click(navLink);
  expect(container.firstChild.classList).toContain('show');
});
