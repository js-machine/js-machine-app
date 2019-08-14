import React from 'react';
import Background from './images/events.jpg';
import './styles/events.css';

import { EventsContent } from './components/eventsContent';
import { getEventData } from './services/moksEvetnData';
import { EventModel } from './models/events';

import { FormattedMessage } from 'react-intl';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export class Events extends React.PureComponent<{}, EventModel> {
  constructor(props: {}) {
    super(props);
    this.state = { eventsData: [] };
  }

  public componentDidMount = () => {
    getEventData().then(response => this.setState(() => {
        return {eventsData: response};
      }),
    );
  }

  public render(): JSX.Element {
    return (
      <div style={ sectionStyle }>
        <div className="body">
          <div className="title">
            <FormattedMessage id="page.events" />
          </div>
          <EventsContent eventsData={this.state.eventsData} />
        </div>
      </div>
    );
  }
}
