import React from 'react';
import './App.scss';
import Calendar from './components/Calendar/MyCalendar.js';

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

function App() {
  return (
    <div className="App">
     <Calendar events={events}/>
    </div>
  );
}

export default App;
