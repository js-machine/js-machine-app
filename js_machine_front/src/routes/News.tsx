import React, { PureComponent } from 'react';
import DigestView from 'components/DigestView/DigestView';

const sectionStyle = {
  backgroundColor: 'grey',
  paddingTop: 100,
};

export class News extends PureComponent {

  state = {
    openDigest: false
  }

  openDigest = () => {
    this.setState({ openDigest : true })
  }

  closeDigest = () => {
    this.setState({ openDigest: false })
  }

  render(): JSX.Element {
    return (
      <div style={ sectionStyle }>
        <h1>News</h1>
        <button onClick={this.openDigest}>Open digest</button>
        <DigestView isOpen={this.state.openDigest} closeDigest={this.closeDigest} />
      </div>
    );
  }
}
