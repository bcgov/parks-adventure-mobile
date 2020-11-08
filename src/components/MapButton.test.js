import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import { Linking } from 'react-native'
import { Provider } from 'react-native-paper'
import MapButton from './MapButton'

const location = { latitude: '50.987578', longitude: '-119.725971' }

test('Maps button opens url with park lat, long', () => {
  const spy = jest.spyOn(Linking, 'openURL')
  const { getByA11yLabel } = render(
    <Provider>
      <MapButton location={location} />
    </Provider>
  )

  const button = getByA11yLabel('map-link')
  expect(button).toBeDefined()

  fireEvent.press(button)
  expect(spy).toHaveBeenCalledWith(
    `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`
  )

  spy.mockReset()
  spy.mockRestore()
})

test('matches MapButton snapshot', () => {
  const tree = renderSnapshot.create(<MapButton location={location} />).toJSON()
  expect(tree).toMatchSnapshot()
})
