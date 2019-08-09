import React, { memo } from 'react';
import Background from './images/events.jpg';
import './styles/events.css';

import { EventsContent } from './components/eventsContent';
import { mocksEventsData } from './models/mocksEventData';

import { FormattedMessage } from 'react-intl';

const sectionStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Events: React.FC = memo(() => {

  return (
    <div style={ sectionStyle }>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.events" />
        </div>
        <EventsContent eventsData={mocksEventsData} />
      </div>
    </div>
  );
});
