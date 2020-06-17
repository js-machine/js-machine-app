import React, { useEffect } from 'react';
import { useStores } from "@js-machine-app/front/stores";

import { Loader } from '../../components/Loader';

import { CalendarContent } from './components/calendarContent'

import { observer } from "mobx-react-lite";

const sectionStyle = {
    height: '100vh',
    backgroundImage: `url('assets/about.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };



export const EventCalendar = observer(() =>{
  const {communityEventsStore, uiStore} = useStores();
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
