import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './demo/pages/Dashboard';
import MainHeader from './demo/layout/MainHeader';
import MainSidebar from './demo/layout/MainSidebar';
import ContentWrapper from './demo/layout/ContentWrapper';
import MainFooter from './demo/layout/MainFooter';

export default function App() {
  return (
    <Router>
      <MainHeader />
      <MainSidebar />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </ContentWrapper>
      <MainFooter />
    </Router>
  );
}
