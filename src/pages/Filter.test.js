import React from 'react'
import { create, act } from 'react-test-renderer'
import FilterPage from './Filter'
import { DataProvider } from '../utils/DataContext.mock'

jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: 'Icon',
}))

test('Filter page matches snapshot', () => {
  let tree

  act(() => {
    tree = create(
      <DataProvider>
        <FilterPage navigation={{ navigation: {} }} />
      </DataProvider>
    )
  })

  expect(tree.toJSON()).toMatchSnapshot()
})
