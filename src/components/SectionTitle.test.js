import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Linking } from 'react-native'
import SectionTitle from './SectionTitle'

test('SectionTitle renders with props', () => {
  const { getByText } = render(<SectionTitle title={'Title'} icon={'folder'} />)

  const title = getByText('Title')
  expect(title).toBeDefined()
})

test('shows More info link', () => {
  const spy = jest.spyOn(Linking, 'openURL')
  const link = 'https://google.com'

  const { getByText } = render(
    <SectionTitle title={'Title'} icon={'folder'} link={link} />
  )

  const title = getByText('More info')
  expect(title).toBeDefined()

  fireEvent.press(title)
  expect(spy).toHaveBeenCalledWith(link)

  spy.mockReset()
  spy.mockRestore()
})
