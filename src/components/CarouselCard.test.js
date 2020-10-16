import React from 'react'
import { render } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import CarouselCard from './CarouselCard'

test('Should render title and distance props', () => {
  const park = {
    title: 'Adventure Park',
    uri: 'https://picsum.photos/id/1043/5184/3456',
    distance: '297',
    favourited: false,
  }

  const { getByText } = render(<CarouselCard {...park} />)

  const title = getByText(park.title)
  const distance = getByText(`${park.distance}km Away`)

  expect(title).toBeDefined()
  expect(distance).toBeDefined()
})

test('renders with no uri and favourited set to true', () => {
  const park = {
    title: 'Adventure Park',
    distance: '297',
    favourited: true,
  }

  const tree = renderSnapshot.create(<CarouselCard {...park} />).toJSON()
  expect(tree).toMatchSnapshot()
})
