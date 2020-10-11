import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag,
  faFile,
  faChartBar,
  faIdCard,
  faCreditCard,
  faChartLine,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';

export function SidebarIcon({ children }) {
  return (
    <span className="mr-2">
      {children}
    </span>
  );
}

SidebarIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SidebarLink = React.forwardRef((props, ref) => {
  const { to, icon, children } = props;
  return (
    <Nav.Link
      {...props}
      className="my-1 py-2"
      as={Link}
      to={to}
      eventKey={to}
      ref={ref}
    >
      <SidebarIcon>
        <FontAwesomeIcon icon={icon} />
      </SidebarIcon>
      {children}
    </Nav.Link>
  );
});

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Sidebar({
  isSidebarToggled,
}) {
  const location = useLocation();

  const refFocusOnToggle = useRef();
  useEffect(
    () => {
      if (isSidebarToggled && refFocusOnToggle?.current) {
        refFocusOnToggle.current.focus();
      }
    },
    [isSidebarToggled],
  );

  return (
    <div className="border-right" id="sidebar-wrapper">
      <Nav activeKey={location.pathname} as="nav" className="flex-column">
        <SidebarLink
          to="/admin/learners"
          icon={faChartLine}
          ref={refFocusOnToggle}
        >
          Learner Report
        </SidebarLink>
        <SidebarLink
          to="/admin/coupons"
          icon={faTag}
        >
          Code Management
        </SidebarLink>
        <SidebarLink
          to="/admin/reporting"
          icon={faFile}
        >
          Reporting Configurations
        </SidebarLink>
        <SidebarLink
          to="/admin/subscriptions"
          icon={faCreditCard}
        >
          Subscription Management
        </SidebarLink>
        <SidebarLink
          to="/admin/analytics"
          icon={faChartBar}
        >
          Analytics
        </SidebarLink>
        <SidebarLink
          to="/admin/samlconfiguration"
          icon={faIdCard}
        >
          SAML Configuration
        </SidebarLink>
        <SidebarLink
          to="/admin/support"
          icon={faLifeRing}
        >
          Contact Support
        </SidebarLink>
      </Nav>
    </div>
  );
}

Sidebar.propTypes = {
  isSidebarToggled: PropTypes.bool.isRequired,
};
