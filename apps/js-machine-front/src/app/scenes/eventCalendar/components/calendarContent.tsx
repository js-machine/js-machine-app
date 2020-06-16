import React from 'react';
import { Event } from '@js-machine-app/models';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

const calendar = {
  'display': "inline-block",
  'margin': "128px 120px",
  'width': '600px',
  'padding': "10px",
  'backgroundColor': '#fff',
};


export function CalendarContent(props: any){
  const localizer = momentLocalizer(moment)
  const events = props.events.map((event: Event) => {
    const startDate = new Date(event.date);
    const endDate = new Date(event.date);
    endDate.setHours(endDate.getHours() + 2);
    return {
      title: event.title,
      start: startDate,
      end: endDate,
      allDay: false,
      resource: "any",
    }
  });
  return (
    <div style={calendar}>
        <Calendar
            rtl={false}
            events={events}
            culture={'en-GB'}
            defaultDate={new Date()}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '450px',width: '95%' }}
        />
    </div>
  );
}
