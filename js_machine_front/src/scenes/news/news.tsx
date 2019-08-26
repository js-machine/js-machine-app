import React, { PureComponent } from 'react';
import Background from './images/news.jpg';
import { FormattedMessage } from 'react-intl';
import './styles/news.css';

import { DigestView } from 'components/DigestView/DigestView';
import { EventsContainer } from './components/newsContainer';
import { NewsModel } from './models/news';
import { getNewsData } from './services/mocksNewsData';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

interface State {
  openDigest: boolean;
  newsData: [];
}

export class News extends PureComponent<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      openDigest: false,
    };
  }

  public componentDidMount = async () => {
    const response = await getNewsData();
    this.setState(() => ({ newsData: response }));
  }

  openDigest = () => {
    this.setState({ openDigest: true });
  }

  closeDigest = () => {
    this.setState({ openDigest: false });
  }

  exitKeyPressHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.closeDigest();
    }
  }

  render(): JSX.Element {
    return (
      <div style={sectionStyle}>
        <div className="body">
          <div className="title">
            <FormattedMessage id="page.news" />
          </div>
          <button onClick={this.openDigest}>Open digest</button>
            <DigestView isOpen={this.state.openDigest}
              closeDigest={this.closeDigest}
              pressHandler={this.exitKeyPressHandler} />
          <EventsContainer newsData={this.state.newsData}/>
        </div>
      </div>
    );
  }
}

