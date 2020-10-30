import React from 'react'
import { render } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import ParkFindHeader from './ParkFindHeader'

test('Should render using props', () => {
  const { getByText } = render(
    <ParkFindHeader
      searchTerm={''}
      onChangeText={() => {}}
      onSearch={() => {}}
      showFilter={() => {}}
      count={48}
    />
  )

  const title = getByText('48 matching parks')

  expect(title).toBeDefined()
})

test('Should use the singular "park"', () => {
  const { getByText } = render(
    <ParkFindHeader
      searchTerm={''}
      onChangeText={() => {}}
      onSearch={() => {}}
      showFilter={() => {}}
      count={1}
    />
  )

  const title = getByText('1 matching park')

  expect(title).toBeDefined()
})

test('Matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <ParkFindHeader
        searchTerm={'Adams lake'}
        onChangeText={() => {}}
        onSearch={() => {}}
        showFilter={() => {}}
        count={4}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
