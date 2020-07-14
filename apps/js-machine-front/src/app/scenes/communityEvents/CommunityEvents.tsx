import React, { useEffect } from 'react';
import './styles/events.css';

import { Loader } from '../../components/Loader';
import { EventsContent } from './components/EventsContent';

import { FormattedMessage } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import { useStores } from "@js-machine-app/front/stores";
import { observer } from "mobx-react-lite";
import { useBackgroundImage } from '@js-machine-app/front/components/hooks/useBackgroundImage';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

export const Events = observer(() => {
  const classes = useStyles();
	const {communityEventsStore, uiStore} = useStores();
	
	useBackgroundImage('assets/events.jpg');

  useEffect(() => {
    communityEventsStore.getEvents(true);
  }, [communityEventsStore]);

  return (
    <div className={classes.root}>
      <div className="body">
        <div className="title">
          <FormattedMessage id="page.events" />
        </div>
        {uiStore.isPageLoading ? (
          <Loader isLoading={uiStore.isPageLoading} />
        ) : (
          <EventsContent events={communityEventsStore.events} />
        )}
      </div>
    </div>
  );
});
