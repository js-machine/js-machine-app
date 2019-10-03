import React, { memo, useEffect, useState } from 'react';
import Background from './images/main.jpg';
import './styles/main.css';
import './styles/mainMedia.css';
import { useSnackbar } from 'notistack';

import { SocialLinks, RecentEvents } from './';
import { getRecentEvents } from '../communityEvents/services/events.api';
import { Event } from '../communityEvents/models/events';
import { Loader } from 'components/loader/loader';

const sectionStyle = {
  height: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Main: React.FC = memo(() => {
  const {enqueueSnackbar} = useSnackbar();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getRecentEvents()
      .then(setEvents)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={sectionStyle}>
      {isLoading ? (
          <Loader isLoading={isLoading} />
        ) :
        (
          <>
            <SocialLinks
              onSendFeedbackSuccess={() => {
                enqueueSnackbar('Фидбек успешно отправлен!', {
                  variant: 'success',
                  anchorOrigin: {vertical: 'top', horizontal: 'right'},
                });
              }}
              onSendFeedbackError={() => {
                enqueueSnackbar('Произошла ошибка отправки фидбека!', {
                  variant: 'warning', anchorOrigin: {vertical: 'top', horizontal: 'right'},
                });
              }} />
            <div className="main__events">
              <RecentEvents events={events} />
            </div>
          </>
        )
      }
    </div>
  );
});
