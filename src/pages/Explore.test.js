import React from 'react'
import { create, act } from 'react-test-renderer'
import ExplorePage from './Explore'
import { DataProvider } from '../utils/DataContext.mock'

test('Explore page matches snapshot', () => {
  let tree

  act(() => {
    tree = create(
      <DataProvider>
        <ExplorePage navigation={{}} />
      </DataProvider>
    )
  })

  expect(tree.toJSON()).toMatchSnapshot()
})
