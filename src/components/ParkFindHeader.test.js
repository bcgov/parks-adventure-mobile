import React from 'react'
import { render } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import ParkFindHeader from './ParkFindHeader'

test('Should render using props', () => {
  const { getByText } = render(
    <ParkFindHeader count={48} onChangeText={() => {}} onSearch={() => {}} />
  )

  const title = getByText('48 matching parks')

  expect(title).toBeDefined()
})

test('Should use the singular "park"', () => {
  const { getByText } = render(
    <ParkFindHeader count={1} onChangeText={() => {}} onSearch={() => {}} />
  )

  const title = getByText('1 matching park')

  expect(title).toBeDefined()
})

test('Matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <ParkFindHeader count={4} onChangeText={() => {}} onSearch={() => {}} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
