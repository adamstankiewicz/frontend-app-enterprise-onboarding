|Build Status| |Codecov| |license|

frontend-app-enterprise-onboarding
=================================

Please tag **@edx/enterprise-titans** on any PRs or issues.  Thanks.

Getting Started
---------------

**Prerequisite**

`Devstack <https://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/installation/index.html>`_.  If you start Devstack with ``make dev.up.ecommerce`` that should give you everything you need as a companion to this frontend.

**Installation and Startup**

1. Clone your new repo:

  ``git clone https://github.com/edx/frontend-app-enterprise-onboarding.git``

2. Install npm dependencies:

  ``cd frontend-app-enterprise-onboarding && npm install``

3. Start the dev server:

  ``npm start``

The dev server is running at `http://localhost:8080 <http://localhost:8080>`_.

Project Structure
-----------------

The source for this project is organized into nested submodules according to the ADR `Feature-based Application Organization <https://github.com/edx/frontend-template-application/blob/master/docs/decisions/0002-feature-based-application-organization.rst>`_.

Build Process Notes
-------------------

**Production Build**

The production build is created with ``npm run build``.

Internationalization
--------------------

Please see `edx/frontend-platform's i18n module <https://edx.github.io/frontend-platform/module-Internationalization.html>`_ for documentation on internationalization.  The documentation explains how to use it, and the `How To <https://github.com/edx/frontend-i18n/blob/master/docs/how_tos/i18n.rst>`_ has more detail.

.. |Build Status| image:: https://api.travis-ci.org/edx/frontend-app-enterprise-onboarding.svg?branch=master
   :target: https://travis-ci.org/edx/frontend-app-enterprise-onboarding
.. |Codecov| image:: https://codecov.io/gh/edx/frontend-app-enterprise-onboarding/branch/master/graph/badge.svg
   :target: https://codecov.io/gh/edx/frontend-app-enterprise-onboarding
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-app-enterprise-onboarding.svg
   :target: @edx/frontend-app-enterprise-onboarding
