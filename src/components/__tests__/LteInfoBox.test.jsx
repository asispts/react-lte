import React from 'react';
import { render } from '@testing-library/react';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import LteInfoBox from '../LteInfoBox';

const text = 'test text';
const number = '10';

test('Should render component without crash', () => {
  const dom = <LteInfoBox icon={faUsers} text={text} number={number} />;
  const { container } = render(dom);

  expect(container.firstChild.nodeName).toEqual('DIV');
  expect(container.firstChild.getAttribute('class')).toEqual('info-box');
  expect(container.querySelector('.info-box-icon > svg')).toHaveClass('fa-users');
  expect(container.querySelector('.info-box-icon').getAttribute('class')).toEqual('info-box-icon');
  expect(container.querySelector('.info-box-text')).toHaveTextContent(text);
  expect(container.querySelector('.info-box-number')).toHaveTextContent(number);
});

test('Should render component with icon color', () => {
  const dom = <LteInfoBox icon={faUsers} text={text} number={number} iconColor='danger' />;
  const { container } = render(dom);

  expect(container.querySelector('.info-box-icon')).toHaveClass('bg-danger');
});

test('Should render component with custom tag', () => {
  const dom = <LteInfoBox icon={faUsers} text={text} number={number} tag='section' />;
  const { container } = render(dom);

  expect(container.firstChild.nodeName).toEqual('SECTION');
});

test('Should render component with bg color', () => {
  const dom = <LteInfoBox icon={faUsers} text={text} number={number} bgColor='danger' />;
  const { container } = render(dom);

  expect(container.firstChild).toHaveClass('bg-danger');
});
