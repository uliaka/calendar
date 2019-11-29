import React from 'react';
import './EventsDetails.scss';

const EventsDetails = (props) => {
  const eventsInSelectDay = props.eventsInSelectDay;
  const eventsInSelectedDate = props.eventsInSelectedDate;
  if (eventsInSelectDay.length > 0) {
    return (
      <div className="card">
        {eventsInSelectDay.map(event =>
          <>
            <div className='card-title'>{event.date}</div>
            <div className='events-list'>
              <div>Time:</div>
              <div>Title:</div>
              <div>{event.time}</div>
              <div>{event.title}</div>
            </div>
          </>
        )}
      </div>
    )
  }
  if (eventsInSelectedDate.length > 0) {
    return (
      <div className="card">
        {eventsInSelectedDate.map(event =>
          <>
            <div className='card-title'>{event.date}</div>
            <div className='events-list'>
              <div>Time:</div>
              <div>Title:</div>
              <div>{event.time}</div>
              <div>{event.title}</div>
            </div>
          </>
        )}
      </div>
    )
  }
  return (
    <div className="card"> No events</div>
  )

}

export default EventsDetails;
