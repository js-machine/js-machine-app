import * as React from 'react';

import { ErrorIndicator } from '../error-indicator';

import { ErrorBoundaryState } from 'components/navBar/models/errorBoundary';

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
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
