import React from 'react';
import { storiesOf } from '@storybook/react';
import Calendar from '../src/components/Calendar/MyCalendar.js';

export default {
  title: 'Calendar',
};

const events = [
  {
    title: "swimming",
    time: '13:00',
    date: '22-11-2019'
  },
  {
    title: "dancing",
    time: '13:00',
    date: '15-11-2019'
  },
  {
    title: "singing",
    time: '13:00',
    date: '13-11-2019',
  },
];

storiesOf('Calendar', module)
  .add('Calendar', () => <Calendar events={events}/>)
 