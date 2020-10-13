import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from './demo/DemoApp';
import './main.scss';
import 'admin-lte/build/js/AdminLTE';

ReactDOM.render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
