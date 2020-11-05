import React from 'react'
import { render } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import CarouselCard from './CarouselCard'

test('Should render title and distance props', () => {
  const park = {
    title: 'Adventure Park',
    uri: 'https://picsum.photos/id/1043/5184/3456',
    distance: '297',
    favorited: false,
  }

  const { getByText } = render(<CarouselCard {...park} />)

  const title = getByText(park.title)
  const distance = getByText(`${park.distance}km Away`)

  expect(title).toBeDefined()
  expect(distance).toBeDefined()
})

test('renders with no uri and favorited set to true', () => {
  const park = {
    title: 'Adventure Park',
    distance: '297',
    favorited: true,
  }

  const tree = renderSnapshot.create(<CarouselCard {...park} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('advisory banner', () => {
  test('if only 1 advisory, display advisory headline', () => {
    const AdvisoryHeadline = 'Advisory Headline'
    const park = {
      title: 'Adventure Park',
      distance: '297',
      favorited: true,
      advisories: [{ Alert: 'N', Headline: AdvisoryHeadline }],
    }

    const { getByText } = render(<CarouselCard {...park} />)
    const message = getByText(AdvisoryHeadline)

    expect(message).toBeDefined()
  })

  test('more than 1 advisory should condense text', () => {
    const park = {
      title: 'Adventure Park',
      distance: '297',
      favorited: true,
      advisories: [
        { Alert: 'N', Headline: 'Advisory 1' },
        { Alert: 'N', Headline: 'Advisory 2' },
      ],
    }

    //  Only Advisories
    const { getByText, rerender } = render(<CarouselCard {...park} />)
    let message = getByText('2 Advisories')
    expect(message).toBeDefined()

    // One Alert and one Advisory
    park.advisories[0].Alert = 'Y'
    rerender(<CarouselCard {...park} />)
    message = getByText('2 Alerts/Advisories')
    expect(message).toBeDefined()

    //  Only Alerts
    park.advisories[1].Alert = 'Y'
    rerender(<CarouselCard {...park} />)
    message = getByText('2 Alerts')
    expect(message).toBeDefined()
  })
})
