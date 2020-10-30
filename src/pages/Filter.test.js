import React from 'react'
import renderSnapshot from 'react-test-renderer'
import FilterPage from './Explore'
import { DataProvider } from '../utils/DataContext.mock'

test('Filter page matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <DataProvider>
        <FilterPage navigation={{ navigation: jest.fn() }} />
      </DataProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
