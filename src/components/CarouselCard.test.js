import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import CarouselCard from './CarouselCard'

test('Should render title and distance props', () => {
  const park = {
    title: 'Adventure Park',
    imageUri: 'https://picsum.photos/id/1043/5184/3456',
    favorited: false,
    alerts: [],
    advisories: [],
  }

  const { getByText } = render(
    <CarouselCard
      park={park}
      distance={'297'}
      onPress={() => {}}
      onFavoritePress={() => {}}
    />
  )

  const title = getByText(park.title)
  const distance = getByText('297km Away')

  expect(title).toBeDefined()
  expect(distance).toBeDefined()
})

test('renders with no uri and favorited set to true', () => {
  const park = {
    title: 'Adventure Park',
    favorited: true,
    alerts: [],
    advisories: [],
  }

  const tree = renderSnapshot
    .create(
      <CarouselCard
        park={park}
        distance={'297'}
        onPress={() => {}}
        onFavoritePress={() => {}}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('advisory banner', () => {
  test('if only 1 advisory, display advisory headline', () => {
    const AdvisoryHeadline = 'Advisory Headline'
    const park = {
      title: 'Adventure Park',
      favorited: true,
      advisories: [{ Headline: AdvisoryHeadline }],
      alerts: [],
    }

    const { getByText } = render(
      <CarouselCard
        park={park}
        distance={'297'}
        onPress={() => {}}
        onFavoritePress={() => {}}
      />
    )
    const message = getByText(AdvisoryHeadline)

    expect(message).toBeDefined()
  })

  test('more than 1 advisory should condense text', () => {
    const park = {
      title: 'Adventure Park',
      favorited: true,
      advisories: [],
      alerts: [],
    }

    //  Only Advisories
    park.advisories = [{ Headline: 'Advisory 1' }, { Headline: 'Advisory 2' }]
    const { getByText, rerender } = render(
      <CarouselCard
        park={park}
        distance={'297'}
        onPress={() => {}}
        onFavoritePress={() => {}}
      />
    )
    let message = getByText('2 Advisories')
    expect(message).toBeDefined()

    // One Alert and one Advisory
    park.advisories = [{ Headline: 'Advisory 1' }]
    park.alerts = [{ Headline: 'Alert 1' }]
    rerender(
      <CarouselCard
        park={park}
        distance={'297'}
        onPress={() => {}}
        onFavoritePress={() => {}}
      />
    )
    message = getByText('2 Alerts/Advisories')
    expect(message).toBeDefined()

    //  Only Alerts
    park.advisories = []
    park.alerts = [{ Headline: 'Alert 1' }, { Headline: 'Alert 2' }]
    rerender(
      <CarouselCard
        park={park}
        distance={'297'}
        onPress={() => {}}
        onFavoritePress={() => {}}
      />
    )
    message = getByText('2 Alerts')
    expect(message).toBeDefined()
  })
})

test('Should call onPress when pressed', () => {
  const onPress = jest.fn()
  const { getByA11yLabel } = render(
    <CarouselCard
      park={{ title: 'Adventure Park', alerts: [], advisories: [] }}
      distance={'43'}
      onPress={onPress}
      onFavoritePress={() => {}}
    />
  )

  const button = getByA11yLabel('navigate to park details')
  fireEvent.press(button)

  expect(onPress).toHaveBeenCalled()
})

test('favorites park when heart is pressed', () => {
  const park = {
    title: 'Adventure Park',
    favorited: false,
    alerts: [],
    advisories: [],
  }
  const onFavoritePress = jest.fn()

  const { getByA11yLabel } = render(
    <CarouselCard
      park={park}
      distance={'43'}
      onPress={() => {}}
      onFavoritePress={onFavoritePress}
    />
  )

  const heart = getByA11yLabel('favorite park')
  expect(heart).toBeDefined()

  fireEvent.press(heart)
  expect(onFavoritePress).toHaveBeenCalled()
})
