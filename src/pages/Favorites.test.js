import React from 'react'
import { create, act } from 'react-test-renderer'
import FavoritesPage from './Favorites'
import { DataProvider } from '../utils/DataContext.mock'

test('Favorites page matches snapshot', () => {
  let tree

  act(() => {
    tree = create(
      <DataProvider>
        <FavoritesPage navigation={{}} />
      </DataProvider>
    )
  })

  expect(tree.toJSON()).toMatchSnapshot()
})
