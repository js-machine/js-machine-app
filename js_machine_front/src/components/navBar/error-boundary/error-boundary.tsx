import * as React from 'react';

import { ErrorIndicator } from '../error-indicator';

import { IErrorBoundaryState } from 'components/navBar/models/IErrorBoundary';

export class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  state: IErrorBoundaryState = {
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
