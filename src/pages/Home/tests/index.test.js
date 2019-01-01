import * as React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Home from '..'

beforeAll(() => {
  global.alert = jest.fn()
})

afterEach(cleanup)

test('should render "Hello, World!" as title', () => {
  const { getByText } = render(<Home />)
  expect(
    getByText(/A bare bones Parcel.js, React, Jest, Babel 7 starter project/i)
  ).toBeTruthy()
})

test('should show an alert with the message', () => {
  const { getByText } = render(<Home />)

  fireEvent.click(getByText(/Show me a message/i))

  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith('Hello, World!')
})
