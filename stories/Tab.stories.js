import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '../src/components/Tab/Tab.js';
import { withKnobs, select } from "@storybook/addon-knobs";

const tabs = [
  {
    title: 'title tittttt1',
    content: () => "content 1"
  },
  {
    title: 'title 2',
    content: () => "content 2"
  },
  {
    title: 'title title title 3',
    content: () => "content 3"
  },
  {
    title: 'title 4',
    content: () => "content 4"
  },
  {
    title: 'title 5',
    content: () => "content 5"
  },
]

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('Tabs', () => {
    const numberTabs = [...Array(tabs.length).keys()];

    return <Tabs 
    tabs={tabs}
    activeTab={select('active tab', numberTabs, 0)}
  />})

  