import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DemoDashboard from './pages/dashboard/DemoDashboard';
import DemoHeader from './layout/DemoHeader';
import DemoSidebar from './layout/DemoSidebar';
import ContentWrapper from './layout/ContentWrapper';
import MainFooter from './layout/MainFooter';
import Demo404 from './pages/Demo404';

import './data/IconLib';

const getBasename = () => `/${process.env.PUBLIC_URL.split('/').pop()}`;

export default function DemoApp() {
  return (
    <BrowserRouter basename={getBasename()}>
      <DemoHeader />
      <DemoSidebar />
      <ContentWrapper>
        <Switch>
          <Route exact path='/' component={DemoDashboard} />
          <Route component={Demo404} />
        </Switch>
      </ContentWrapper>
      <MainFooter />
    </BrowserRouter>
  );
}
