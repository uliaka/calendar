import React from 'react';
import { storiesOf } from '@storybook/react';
import TabsPagination from '../src/components/Tab/TabsPagination.js';
import { withKnobs, select  } from "@storybook/addon-knobs";

const title = ['title 1', 'title 2', 'title 3', 'title 4', 'title 5']

storiesOf('TabsPagination', module)
  .addDecorator(withKnobs)
  .add('TabsPagination', () => {
    const number = [...Array(title.length).keys()];

    return <TabsPagination 
    title={title}
    active={select('active', number, 0)}
    maxNumber={select('number of title', number, 0)}
  />})

  