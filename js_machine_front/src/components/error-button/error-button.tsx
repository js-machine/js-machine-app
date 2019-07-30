import React, { Component } from 'react';

import './error-button.css';

interface State {
  renderError: boolean;
}

export default class ErrorButton extends Component<{}, State> {

  state: State = {
    renderError: false,
  };

  render(): JSX.Element {
    if (this.state.renderError) {
      throw new Error('Custom Error');
    }

    return (
      <div
        className="error-button"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </div>
    );
  }
}
