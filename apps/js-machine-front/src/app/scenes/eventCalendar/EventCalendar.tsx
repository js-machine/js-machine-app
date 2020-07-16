import React, { useEffect } from 'react';
import { useStores } from "@js-machine-app/front/stores";

import { Loader } from '../../components/Loader';

import { CalendarContent } from './components/calendarContent'

import { observer } from "mobx-react-lite";
import { useBackgroundImage } from '@js-machine-app/front/components/hooks/useBackgroundImage';

const sectionStyle = {
  height: '100vh',
};

export const EventCalendar = observer(() =>{
	const {communityEventsStore, uiStore} = useStores();
	
	useBackgroundImage('assets/about.jpg');

  useEffect(() => {
    communityEventsStore.getEvents(true);
	}, [communityEventsStore]);
	
  return (
    <div style={sectionStyle}>
        <div className='body'>
        {uiStore.isPageLoading ? (
          <Loader isLoading={uiStore.isPageLoading} />
        ) : ( 
          <CalendarContent events={communityEventsStore.events}></CalendarContent>
        )}
        </div>
    </div>
  );
});
