import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import AlertAccordion from './AlertAccordion'

test('Should render alert', () => {
  const { getByText } = render(
    <AlertAccordion
      headline="This is the title"
      description="This is information about the alert"
      type={'alert'}
    />
  )

  const title = getByText('This is the title')
  expect(title).toBeDefined()

  fireEvent.press(title)

  const description = getByText('This is information about the alert')
  expect(description).toBeDefined()
})

test('Should render headline without accordion if no advisory desciption', () => {
  const { queryByTestId } = render(
    <AlertAccordion headline="Title" description=" " type={'alert'} />
  )

  const accordion = queryByTestId('accordion')
  expect(accordion).toBeNull()
})

test('matches alert snapshot', () => {
  const tree = renderSnapshot
    .create(
      <AlertAccordion
        headline="Title"
        description="Description"
        type={'alert'}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('matches advisory snapshot', () => {
  const tree = renderSnapshot
    .create(
      <AlertAccordion
        headline="Title"
        description="Description"
        type={'advisory'}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
