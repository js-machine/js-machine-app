import * as React from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

const MISSING_ERROR = 'Error was swallowed during propagation.';

interface ErrorBoundryState {
  hasError: boolean;
}

export default class ErrorBoundry extends React.Component<{}, ErrorBoundryState> {

  state: ErrorBoundryState = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({
      hasError: true,
    });
  }

  render(): React.ReactNode | React.FC {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
