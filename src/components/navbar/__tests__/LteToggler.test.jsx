import React from 'react';
import { render } from '@testing-library/react';
import LteToggler from '../LteToggler';

test('Should render successfully', () => {
  const dom = <LteToggler />;
  const { container } = render(dom);

  expect(container.querySelector('.nav-link')).not.toBeNull();
});
