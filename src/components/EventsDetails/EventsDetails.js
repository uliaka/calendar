import React from 'react';
import './EventsDetails.scss';

const EventsDetails = (props) => {
  const events = props.eventsInDay
  const columnNane = ['Time', 'Title']
  return (
    <div className="card">
      <div className='card-title'>{props.selectedDate}</div>
      {events.length ?
        <div className='events-list'>
          {columnNane.map(name => 
            <div id='column-name'>{name}</div>)}
          {events.map(event =>
            <>
              <div>{event.time}</div>
              <div>{event.title}</div>
            </>
          )}
        </div>
        :
        <div> No events </div>}
    </div>
  )
}

export default EventsDetails;
