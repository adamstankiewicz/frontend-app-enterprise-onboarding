import 'babel-polyfill';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { messages as footerMessages } from '@edx/frontend-component-footer';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import appMessages from './i18n';

import PageLayout from './components/page-layout';
import NotFound from './pages/not-found';
import LearnerReport from './pages/learner-report';
import SubscriptionManagement from './pages/subscription-management';
import CodeManagement from './pages/code-management';
import ReportingConfigurations from './pages/reporting-configurations';
import Analytics from './pages/analytics';
import SAMLConfiguration from './pages/saml-configuration';
import Support from './pages/support';

import './index.scss';
import './assets/favicon.ico';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Helmet titleTemplate="%s | edX" />
      <PageLayout>
        <Switch>
          <Route path="/admin/learners" component={LearnerReport} />
          <Route path="/admin/coupons" component={CodeManagement} />
          <Route path="/admin/subscriptions" component={SubscriptionManagement} />
          <Route path="/admin/reporting" component={ReportingConfigurations} />
          <Route path="/admin/analytics" component={Analytics} />
          <Route path="/admin/samlconfiguration" component={SAMLConfiguration} />
          <Route path="/admin/support" component={Support} />
          <Route path="*" component={NotFound} />
        </Switch>
      </PageLayout>
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  requireAuthenticatedUser: true,
  hydrateAuthenticatedUser: true,
  messages: [
    appMessages,
    footerMessages,
  ],
});
