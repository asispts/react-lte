import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DemoHeader from './layout/DemoHeader';
import DemoSidebar from './layout/DemoSidebar';
import ContentWrapper from './layout/ContentWrapper';
import MainFooter from './layout/MainFooter';

export default function DemoApp() {
  return (
    <Router>
      <DemoHeader />
      <DemoSidebar />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </ContentWrapper>
      <MainFooter />
    </Router>
  );
}
