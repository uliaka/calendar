import React from 'react';
import { storiesOf } from '@storybook/react';
import TabsPagination from '../src/components/Tab/TabsPagination.js';
import { withKnobs, select  } from "@storybook/addon-knobs";

const title = ['1', '2', '3', '4', '5', '6', '7']

storiesOf('TabsPagination', module)
  .addDecorator(withKnobs)
  .add('TabsPagination', () => {
    const number = [...Array(title.length).keys()];

    return <TabsPagination 
    title={title}
    active={select('active', number, 0)}
    maxNumber={select('number of title', number, 0)}
  />})

  