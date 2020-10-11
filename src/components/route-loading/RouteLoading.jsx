import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@edx/paragon';
import { logError } from '@edx/frontend-platform/logging';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="py-3" fluid>
          <h1>Something went wrong.</h1>
        </Container>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function RouteLoading() {
  return (
    <Container className="py-3" fluid>
      Loading...
    </Container>
  );
}
