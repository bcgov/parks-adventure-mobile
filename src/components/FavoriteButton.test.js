import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import FavoriteButton from './FavoriteButton'

test('Should render outlined heart if not favorited and fill in heart onPress', () => {
  const onPress = jest.fn()
  const { getByA11yLabel, rerender } = render(
    <FavoriteButton onPress={onPress} favortied={false} />
  )

  const button = getByA11yLabel('favorite park')
  expect(button).toBeDefined()
  expect(button._fiber.stateNode.props.name).toBe('heart-outline')

  fireEvent.press(button)
  expect(onPress).toHaveBeenCalled()

  rerender(<FavoriteButton onPress={onPress} favorited={true} />)
  expect(button._fiber.stateNode.props.name).toBe('heart')
})
