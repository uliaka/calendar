import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddEvents from './AddEvents.js';
import '@testing-library/jest-dom/extend-expect';

describe('AddEvents', () => {
  const props = {
    onAddEvents: jest.fn(),
    closeAddEventsForm: jest.fn(),
  }
  test('should invoke onAdd callback', () => {
    const { getByText } = render(<AddEvents {...props} />)
    fireEvent.click(getByText('Add event'))
    expect(props.onAddEvents.mock.calls.length).toBe(1)
  })
  test('should invoke closeAddEventsForm callback', () => {
    expect(props.onAddEvents.mock.calls.length).toBe(1)
  })
});