import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '../src/components/Tab/Tab.js';
import { withKnobs, select } from "@storybook/addon-knobs";

const tabs = [
  {
    title: 'title 1',
    content: () => "content 1"
  },
  {
    title: 'title 2',
    content: () => "content 2"
  },
  {
    title: 'title 3',
    content: () => "content 3"
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

  