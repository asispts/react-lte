import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from './demo/DemoApp';
import 'bootstrap/scss/bootstrap.scss';
import 'admin-lte/build/scss/AdminLTE.scss';
import 'admin-lte/build/js/AdminLTE';

ReactDOM.render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
