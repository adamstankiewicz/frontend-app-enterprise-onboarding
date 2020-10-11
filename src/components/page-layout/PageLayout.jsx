import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Footer from '@edx/frontend-component-footer';

import SiteHeader from '../site-header';
import Sidebar from '../sidebar';

export default function PageLayout({
  children,
}) {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  return (
    <>
      <SiteHeader
        onMenuIconClick={() => { setIsSidebarToggled(prevState => !prevState); }}
        isSidebarToggled={isSidebarToggled}
      />
      <div
        className={classNames('d-flex', { toggled: isSidebarToggled })}
        id="wrapper"
      >
        <Sidebar isSidebarToggled={isSidebarToggled} />
        <div id="page-content-wrapper">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
