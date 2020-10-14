import React from 'react'
import { render } from '@testing-library/react-native'
import CarouselHeader from './CarouselHeader'

test('Should render using props', () => {
  const { getByText } = render(
    <CarouselHeader
      title="Test Title"
      subheading="Test subheading"
      icon={require('../images/icons/activity/hiking.png')}
    />
  )

  const title = getByText('Test Title')
  const subheading = getByText('Test subheading')

  expect(title).toBeDefined()
  expect(subheading).toBeDefined()
})
