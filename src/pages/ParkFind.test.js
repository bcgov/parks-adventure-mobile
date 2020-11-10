import React from 'react'
import renderSnapshot from 'react-test-renderer'
import ParkFindPage from './ParkFind'
import { DataProvider } from '../utils/DataContext.mock'

test('ParkFind page matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <DataProvider>
        <ParkFindPage navigation={{}} />
      </DataProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
