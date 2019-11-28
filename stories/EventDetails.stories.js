import React from 'react';
import { storiesOf } from '@storybook/react';
import EventDetails from '../src/components/EventsDetails/EventsDetails.js';

export default {
  title: 'EventDetails',
};
const eventsInDay = [
  {
    title: 'swimming',
    time: '11:00',
    date: '22-11-2019'
  },
  {
    title: 'singing',
    time: '13:00',
    date: '22-11-2019'
  },
  {
    title: 'dansing',
    time: '17:00',
    date: '22-11-2019'
  }
];
const selectedDate = '22-11-2019';

storiesOf('EventDetails', module)
  .add('EventDetails', () => <EventDetails eventsInDay={eventsInDay} selectedDate={selectedDate}/>)