import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuButton from '../src/components/Tab/MenuButton.js';

storiesOf('MenuButton', module)
  .add('TabsPagination', () => {

    return <MenuButton open={true} />})