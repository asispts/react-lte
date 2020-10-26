import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LteContactsListItem from '../LteContactsListItem';

const href = '/contacts';
const image = 'image.jpg';
const name = 'Test name';
const date = '2020-10-26';
const message = 'Test message';

test('Should render component without crash', () => {
  const dom = <LteContactsListItem href={href} image={image} name={name} date={date} message={message} />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.firstChild.nodeName).toEqual('LI');
  expect(container.querySelector('li > a')).toHaveAttribute('href', href);
  expect(container.querySelector('.contacts-list-img')).toHaveAttribute('src', image);
  expect(container.querySelector('.contacts-list-name')).toHaveTextContent(name);
  expect(container.querySelector('.contacts-list-date')).toHaveTextContent(date);
  expect(container.querySelector('.contacts-list-msg')).toHaveTextContent(message);
});

// test('Should render component with children', () => {
//   const dom = <LteContactsList>Content</LteContactsList>;
//   const { container } = render(dom);

//   expect(container.firstChild).toHaveTextContent('Content');
// });
