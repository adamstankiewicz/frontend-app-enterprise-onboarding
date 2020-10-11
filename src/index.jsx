import 'babel-polyfill';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { messages as footerMessages } from '@edx/frontend-component-footer';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import appMessages from './i18n';

import PageLayout from './components/page-layout';
import RouteLoading, { ErrorBoundary } from './components/route-loading';
import Toasts, { ToastsProvider } from './components/toasts';

import './index.scss';
import './assets/favicon.ico';

const NotFound = React.lazy(() => import('./pages/not-found'));
const LearnerReport = React.lazy(() => import('./pages/learner-report'));
const SubscriptionManagement = React.lazy(() => import('./pages/subscription-management'));
const CodeManagement = React.lazy(() => import('./pages/code-management'));
const ReportingConfigurations = React.lazy(() => import('./pages/reporting-configurations'));
const Analytics = React.lazy(() => import('./pages/analytics'));
const SAMLConfiguration = React.lazy(() => import('./pages/saml-configuration'));
const Support = React.lazy(() => import('./pages/support'));

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Helmet titleTemplate="%s | edX" />
      <ToastsProvider>
        <Toasts />
        <PageLayout>
          <ErrorBoundary>
            <Suspense fallback={<RouteLoading />}>
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
            </Suspense>
          </ErrorBoundary>
        </PageLayout>
      </ToastsProvider>
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
