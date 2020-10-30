import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ParkList from './ParkList'

const parks = [
  {
    title: 'Park 1',
    distance: '25',
    uri: 'https://picsum.photos/id/1043/5184/3456',
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
    uri: 'https://picsum.photos/id/1043/5184/3456',
    favorited: false,
  },
  {
    title: 'Park 4',
    distance: '90',
    uri: 'https://picsum.photos/id/1043/5184/3456',
    favorited: true,
  },
]

test('Should render using props', () => {
  const { getByText } = render(
    <ParkList parks={parks} onFavoritePress={() => {}} />
  )

  const title = getByText(parks[0].title)

  expect(title).toBeDefined()
})

test('Should call onFavoritePress when pressed', () => {
  const onFavoritePress = jest.fn()
  const { getAllByAccessibilityLabel } = render(
    <ParkList parks={parks} onFavoritePress={onFavoritePress} />
  )

  const favoriteButton = getAllByAccessibilityLabel('favorite park')[0]
  fireEvent.press(favoriteButton)

  expect(onFavoritePress).toHaveBeenCalled()
})
