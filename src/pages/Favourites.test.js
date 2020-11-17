import React from 'react'
import { create, act } from 'react-test-renderer'
import FavouritesPage from './Favourites'
import { DataProvider } from '../utils/DataContext.mock'

test('Favourites page matches snapshot', () => {
  let tree

  act(() => {
    tree = create(
      <DataProvider>
        <FavouritesPage navigation={{}} />
      </DataProvider>
    )
  })

  expect(tree.toJSON()).toMatchSnapshot()
})
