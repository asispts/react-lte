import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import DemoApp from '@demo/DemoApp';
import './reactlte.scss';
import 'admin-lte/build/js/AdminLTE';

ReactDOM.render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
