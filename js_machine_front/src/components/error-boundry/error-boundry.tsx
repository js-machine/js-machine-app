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

  // tslint:disable-next-line: typedef
  componentDidCatch(error: Error, errorInfo: object) {
    this.setState({
      hasError: true,
      error: error || new Error(MISSING_ERROR),
    });
  }

  // tslint:disable-next-line: typedef
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
