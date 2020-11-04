import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import AlertAccordion from './AlertAccordion'

test('Should render alert', () => {
  const { getByText } = render(
    <AlertAccordion
      headline="This is the title"
      description="This is information about the alert"
      alert={true}
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
    <AlertAccordion headline="Title" description=" " alert={true} />
  )

  const accordion = queryByTestId('accordion')
  expect(accordion).toBeNull()
})

test('matches alert snapshot', () => {
  const tree = renderSnapshot
    .create(
      <AlertAccordion headline="Title" description="Description" alert={true} />
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
        alert={false}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
