import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DemoApp from '../../demo/DemoApp';

test('Should render without crash', () => {
  const dom = <DemoApp />;
  const { container } = render(dom, { wrapper: MemoryRouter });

  expect(container.firstChild).not.toBeNull();
});
