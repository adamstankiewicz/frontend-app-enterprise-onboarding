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

import { NotFoundPage } from './components/not-found';
import PageLayout from './components/page-layout';

import './index.scss';

import './assets/favicon.ico';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Helmet titleTemplate="%s | edX" />
      <PageLayout>
        <Switch>
          <Route path="*" component={NotFoundPage} />
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
