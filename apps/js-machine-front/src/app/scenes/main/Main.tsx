import React, { useEffect } from 'react';
import './styles/main.css';
import './styles/mainMedia.css';
import { useSnackbar } from 'notistack';

import { SocialLinks, RecentEvents } from './';
import { Loader } from '../../components/Loader';
import { MainTrailer } from '../../components/MainTrailer';
import { useStores } from "@js-machine-app/front/stores";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";
import { useBackgroundImage } from '@js-machine-app/front/components/hooks/useBackgroundImage';

const useStyles = makeStyles({
  section: {
    height: '100vh',
  },
  video: {
    /**
     * Comment this lines to enable video playing on small devices
     */
    '@media only screen and (max-width: 1200px) ': {
      display: 'none',
    },
  },
});

export const Main: React.FC = observer(() => {
  const classes = useStyles();
  const {enqueueSnackbar} = useSnackbar();
	const {communityEventsStore, uiStore} = useStores();
	
	useBackgroundImage('assets/main.jpg', false);

  useEffect(() => {
    communityEventsStore.getRecentEvents(true);
  }, [communityEventsStore]);

  return (
    <div className={classes.section}>
      {uiStore.isPageLoading ? (
        <Loader isLoading={uiStore.isPageLoading} />
      ) : (
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
                variant: 'warning',
                anchorOrigin: {vertical: 'top', horizontal: 'right'},
              });
            }}
          />
          <div className={classes.video}>
            <MainTrailer />
          </div>
          <div className="main__events">
            <RecentEvents events={communityEventsStore.recentEvents} />
          </div>
        </>
      )}
    </div>
  );
});
