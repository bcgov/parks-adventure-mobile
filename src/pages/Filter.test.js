import React from 'react'
import renderSnapshot from 'react-test-renderer'
import FilterPage from './Filter'
import { DataProvider } from '../utils/DataContext.mock'

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon')

test('Filter page matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <DataProvider>
        <FilterPage navigation={{ navigation: {} }} />
      </DataProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
