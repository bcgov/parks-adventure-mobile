import React from 'react'
import { render } from '@testing-library/react-native'
import renderSnapshot from 'react-test-renderer'
import FilterAmenityListItem from './FilterAmenityListItem'

test('Should render as selected', () => {
  const { getByText, getByA11yLabel } = render(
    <FilterAmenityListItem name="Hiking" onSelect={() => {}} selected={true} />
  )

  const title = getByText('Hiking')
  expect(title).toBeDefined()

  const checked = getByA11yLabel('select')
  expect(checked).toBeDefined()
  expect(checked._fiber.stateNode.props.style[0].backgroundColor).toBe(
    '#294071'
  )
  expect(checked._fiber.stateNode.props.style[0].borderColor).toBe('#294071')
})

test('Should render as unselected', () => {
  const { getByText, getByA11yLabel } = render(
    <FilterAmenityListItem name="Hiking" onSelect={() => {}} selected={false} />
  )

  const title = getByText('Hiking')
  expect(title).toBeDefined()

  const checked = getByA11yLabel('select')
  expect(checked).toBeDefined()
  expect(checked._fiber.stateNode.props.style[0].backgroundColor).toBe('white')
  expect(checked._fiber.stateNode.props.style[0].borderColor).toBe('black')
})

test('matches snapshot', () => {
  const tree = renderSnapshot
    .create(
      <FilterAmenityListItem
        name="Hiking"
        onSelect={() => {}}
        selected={true}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
