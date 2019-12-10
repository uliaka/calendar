import React, { useState } from 'react';
import './AddEvents.scss';
import AddTag from '../AddTag/AddTag.js'

const AddEvents = (props) => {
  const [event, setEvent] = useState({ title: "", time: "", date: "", tags: [] });
  console.log('event', event)
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEvent(event => ({...event, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form-add-event">
      <form onSubmit={handleSubmit}>
        <label className="input-event">
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleInputChange}
          />
          <span className="label">Title</span>
          <span className="border"></span>
        </label>
        <label className="input-event">
          <input
            type="text"
            name="time"
            placeholder="00:00"
            value={event.time}
            onChange={handleInputChange}
          />
          <span className="label">Time</span>
          <span className="border"></span>
        </label>
        <label className="input-event">
          <input
            type="text"
            name="date"
            placeholder="01-01-2019"
            value={event.date}
            onChange={handleInputChange}
          />
          <span className="label">Date</span>
          <span className="border"></span>
        </label>
          <AddTag
            tags={event.tags}
          />
        <div className="add-event btn"
          type='submit'
          onClick={() => {
            props.onAddEvents(event)
            props.closeAddEventsForm()
          }}
        >
          <span>Add event </span>
        </div>
      </form>
    </div>
  );
};

export default AddEvents;
