import * as React from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

const MISSING_ERROR = 'Error was swallowed during propagation.';

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundry extends React.Component<{}, State> {

  state: State = {
    hasError: false,
    error: null,
  };

  componentDidCatch(error: Error, errorInfo: object): void {
    this.setState({
      hasError: true,
      error: error || new Error(MISSING_ERROR),
    });
  }

  render(): React.ReactNode | React.FC {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
