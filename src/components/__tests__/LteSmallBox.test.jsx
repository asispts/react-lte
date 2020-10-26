import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import LteSmallBox from '../LteSmallBox';

const title = 'Test title';
const message = 'Test Message';
const href = '/test';

test('Should render component without crash', () => {
  const dom = <LteSmallBox title={title} message={message} icon={faAddressBook} href={href} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.querySelector('.inner > h3')).toHaveTextContent(title);
  expect(container.querySelector('.inner > p')).toHaveTextContent(message);
  expect(container.querySelector('.icon > svg')).toHaveClass('fa-address-book');
  expect(container.querySelector('a')).toHaveAttribute('href', href);
});

test('Should render component with optional props', () => {
  const dom = <LteSmallBox title={title} message={message} icon={faAddressBook} href={href} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.firstChild.nodeName).toEqual('DIV');
  expect(container.firstChild.getAttribute('class')).toEqual('small-box');
});

test('Should render component with bg color', () => {
  const dom = <LteSmallBox title={title} message={message} icon={faAddressBook} href={href} color='danger' />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.firstChild).toHaveClass('bg-danger');
});

test('Should render component with different tag name', () => {
  const dom = <LteSmallBox title={title} message={message} icon={faAddressBook} href={href} tag='section' />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.firstChild.nodeName).toEqual('SECTION');
});
