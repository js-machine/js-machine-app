import React, { ReactNode, ComponentType, ErrorInfo } from 'react';
import { ErrorBoundaryFallbackComponent } from './ErrorBoundaryFallbackComponent';

interface Props {
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FallbackComponent: ComponentType<any>;
  onError?: (error: Error, componentStack: string) => void;
}

interface State {
  error?: Error;
  info?: ErrorInfo;
}

export class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps: Props = {
    FallbackComponent: ErrorBoundaryFallbackComponent,
  };

  public state: State = {};

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    const { onError } = this.props;

    if (typeof onError === 'function') {
      try {
        onError.call(this, error, info ? info.componentStack : '');
      } catch (ignoredError) {
        // catch error
      }
    }

    this.setState({ error, info });
  }

  public render(): React.ReactNode | React.FC {
    const { children, FallbackComponent } = this.props;
    const { error, info } = this.state;

    if (error) {
      return (
        <FallbackComponent
          componentStack={info ? info.componentStack : ''}
          error={error}
        />
      );
    }

    return children || null;
  }
}
