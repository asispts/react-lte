import React from 'react';
import { render } from '@testing-library/react';
import LteText from '../LteText';

test('Should render component with default properties', () => {
  const dom = <LteText />;
  const { container } = render(dom);

  expect(container.querySelector('p')).not.toBeNull();
  expect(container.querySelector('p').getAttribute('class')).toEqual('');
  expect(container.querySelector('p').innerHTML).toEqual('');
});

test('Should render component with span tag', () => {
  const dom = <LteText tag='span' />;
  const { container } = render(dom);

  expect(container.querySelector('p')).toBeNull();
  expect(container.querySelector('span')).not.toBeNull();
});

test('Should render component with size sm', () => {
  const dom = <LteText size='sm' />;
  const { container } = render(dom);

  expect(container.querySelector('p').getAttribute('class')).toEqual('text-sm');
});

test('Should render component with color danger', () => {
  const dom = <LteText color='danger' />;
  const { container } = render(dom);

  expect(container.querySelector('p').getAttribute('class')).toEqual('text-danger');
});

test('Should render component with size sm and color danger', () => {
  const dom = <LteText color='danger' size='sm' />;
  const { container } = render(dom);

  expect(container.querySelector('p').getAttribute('class')).toEqual('text-danger text-sm');
});

test('Should render component with additional classes', () => {
  const dom = <LteText color='danger' size='sm' className='text-muted' />;
  const { container } = render(dom);

  expect(container.querySelector('p').getAttribute('class')).toEqual('text-muted text-danger text-sm');
});

test('Should render component with children', () => {
  const dom = <LteText>children</LteText>;
  const { container } = render(dom);

  expect(container.querySelector('p').innerHTML).toEqual('children');
});
