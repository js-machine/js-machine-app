import React from 'react';
import Background from './images/news.jpg';
import { FormattedMessage } from 'react-intl';
import './styles/news.css';

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

export class News extends React.PureComponent<{}, NewsModel> {
  public state: NewsModel = { newsData: [] };

  public componentDidMount = async () => {
    const response = await getNewsData();
    this.setState(() => ({ newsData: response }));
  }

  public render(): JSX.Element {
    return (
      <div style={sectionStyle}>
        <div className="body">
          <div className="title">
            <FormattedMessage id="page.news" />
          </div>
          <EventsContainer newsData={this.state.newsData}/>
        </div>
      </div>
    );
  }
}
