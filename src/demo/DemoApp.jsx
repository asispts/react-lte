import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainHeader from './layout/MainHeader';
import DemoSidebar from './layout/DemoSidebar';
import ContentWrapper from './layout/ContentWrapper';
import MainFooter from './layout/MainFooter';

export default function DemoApp() {
  return (
    <Router>
      <MainHeader />
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
