import React, { PureComponent } from 'react';
import DigestView from 'components/DigestView/DigestView';

const sectionStyle = {
  backgroundColor: 'grey',
  paddingTop: 100,
};

interface State {
  openDigest: boolean;
}

export class News extends PureComponent<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      openDigest: false,
    };
}

  openDigest = () => {
    this.setState({ openDigest : true });
  }

  closeDigest = () => {
    this.setState({ openDigest: false });
  }

  exitKeyPressHandler = (e: any) => {
    if (e.keyCode === 27) {
      this.closeDigest();
    }
  }

  render(): JSX.Element {
    return (
      <div style={ sectionStyle }>
        <h1>News</h1>
        <button onClick={this.openDigest}>Open digest</button>
        <DigestView isOpen={this.state.openDigest}
            closeDigest={this.closeDigest}
            pressHandler={this.exitKeyPressHandler}/>
      </div>
    );
  }
}
