import React from 'react'
import renderSnapshot from 'react-test-renderer'
import ExplorePage from './Explore'
import { DataProvider } from '../utils/DataContext.mock'

test('Explore page matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <DataProvider>
        <ExplorePage navigation={{}} />
      </DataProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
