import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ParkList from './ParkList'

const parks = [
  {
    title: 'Park 1',
    distance: '25',
    imageUri: 'https://picsum.photos/id/1043/5184/3456',
    favorited: false,
  },
  {
    title: 'Park 2',
    distance: '35',
    favorited: true,
  },
  {
    title: 'Park 3',
    distance: '80',
    imageUri: 'https://picsum.photos/id/1043/5184/3456',
    favorited: false,
  },
  {
    title: 'Park 4',
    distance: '90',
    imageUri: 'https://picsum.photos/id/1043/5184/3456',
    favorited: true,
  },
]

test('Should render using props', () => {
  const { getByText } = render(
    <ParkList parks={parks} onFavoritePress={() => {}} onPress={() => {}} />
  )

  const title = getByText(parks[0].title)

  expect(title).toBeDefined()
})

test('Should call onPress when pressed', () => {
  const onPress = jest.fn()
  const { getAllByAccessibilityLabel } = render(
    <ParkList parks={parks} onFavoritePress={() => {}} onPress={onPress} />
  )

  const parkItems = getAllByAccessibilityLabel('navigate to park details')
  expect(parkItems).toHaveLength(4)
  fireEvent.press(parkItems[0])

  expect(onPress).toHaveBeenCalled()
})

test('Should call onFavoritePress when pressed', () => {
  const onFavoritePress = jest.fn()
  const { getAllByAccessibilityLabel } = render(
    <ParkList
      parks={parks}
      onFavoritePress={onFavoritePress}
      onPress={() => {}}
    />
  )

  const favoriteButton = getAllByAccessibilityLabel('favorite park')[0]
  fireEvent.press(favoriteButton)

  expect(onFavoritePress).toHaveBeenCalled()
})
