import React from 'react';
import { storiesOf } from '@storybook/react';
import AddEvents from '../src/components/AddEvents/AddEvents.js';


const onAddEvents = () => {
    return console.log(`added`)
}

const closeAddEventsForm = () => {
    return console.log('closed')
}

storiesOf('AddEvents', module)
  .add('AddEvents', () => <AddEvents onAddEvents={onAddEvents} closeAddEventsForm={closeAddEventsForm}/>)