import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import FilterAmenityAccordion from './FilterAmenityAccordion'

const amenities = [
  { id: '1', name: 'Hiking', selected: false },
  { id: '2', name: 'Fishing', selected: false },
  { id: '3', name: 'Climbing', selected: false },
  { id: '4', name: 'Wilderness Camping', selected: false },
]

function Wrapper() {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <FilterAmenityAccordion
      amenities={amenities}
      onSelect={() => {}}
      expanded={expanded}
      onPress={() => setExpanded(true)}
    />
  )
}

test('Should expand and change text when onPress fired', () => {
  const { getByText } = render(<Wrapper />)

  const openButton = getByText('See all amenities')
  expect(openButton).toBeDefined()
  fireEvent.press(openButton)

  const closeButton = getByText('Collapse all amenities')
  expect(closeButton).toBeDefined()
})

test('matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <FilterAmenityAccordion
        amenities={amenities}
        onSelect={() => {}}
        expanded={true}
        onPress={() => {}}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
