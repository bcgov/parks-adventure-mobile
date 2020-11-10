import React from 'react'
import renderSnapshot from 'react-test-renderer'
import FavouritesPage from './Favourites'
import { DataProvider } from '../utils/DataContext.mock'

test('Favourites page matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <DataProvider>
        <FavouritesPage />
      </DataProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
