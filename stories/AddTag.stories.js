import React from 'react';
import { storiesOf } from '@storybook/react';
import AddTag from '../src/components/AddTag/AddTag.js';

const tags = ['celebrate', 'newYear']

storiesOf('AddTag', module)
  .add('AddTag', () => <AddTag tags={tags}/>)