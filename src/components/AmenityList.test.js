import React from 'react'
import { render } from '@testing-library/react-native'
import AmenityList from './AmenityList'

const list = [
  {
    id: '4',
    name: 'Canoeing',
  },
  {
    id: '15',
    name: 'Caving',
  },
  {
    id: '4',
    name: 'Climbing',
  },
  {
    id: '9',
    name: 'Cycling',
  },
]

const selected = ['4', '9']

test('Should display only selected amenities', () => {
  const { getByText, queryByText } = render(
    <AmenityList list={list} selected={selected} />
  )

  const cycling = getByText('Cycling')
  expect(cycling).toBeDefined()
  const climbing = getByText('Canoeing')
  expect(climbing).toBeDefined()

  const canoeing = queryByText('Climbing')
  expect(canoeing).toBeNull()
  const caving = queryByText('Caving')
  expect(caving).toBeNull()
})
