import React, { memo, useEffect, useState } from 'react';
import './styles/main.css';
import './styles/mainMedia.css';
import { useSnackbar } from 'notistack';

import { SocialLinks, RecentEvents } from './';
import { getRecentEvents } from '@js-machine-app/data-service';
import { Event } from '@js-machine-app/models';
import { Loader } from '../../components/Loader';

const sectionStyle = {
  height: '100%',
  backgroundImage: `url('assets/main.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const Main: React.FC = memo(() => {
  const { enqueueSnackbar } = useSnackbar();
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
      ) : (
        <>
          <SocialLinks
            onSendFeedbackSuccess={() => {
              enqueueSnackbar('Фидбек успешно отправлен!', {
                variant: 'success',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
              });
            }}
            onSendFeedbackError={() => {
              enqueueSnackbar('Произошла ошибка отправки фидбека!', {
                variant: 'warning',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
              });
            }}
          />
          <div className="main__events">
            <RecentEvents events={events} />
          </div>
        </>
      )}
    </div>
  );
});
