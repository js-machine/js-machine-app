import React from 'react';
import { Event } from '@js-machine-app/models';
import { PropsEventContent } from '../models/eventContent';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/calendar.css'
import moment from 'moment'

export const CalendarContent: React.FC<PropsEventContent> = (
  props: PropsEventContent,
) => {
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
    <div className='body'>
      <div className="calendarContainer">
        <div className="calendar">
          <Calendar
              rtl={false}
              events={events}
              culture={'ru-RU'}
              defaultDate={new Date()}
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
          />
        </div>
      </div>
    </div>
  );
}
