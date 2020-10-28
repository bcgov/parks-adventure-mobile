import React from 'react'
import renderSnapshot from 'react-test-renderer'
import ExplorePage from './Explore'

test('Explore page matches snapshot', () => {
  const tree = renderSnapshot.create(<ExplorePage />).toJSON()
  expect(tree).toMatchSnapshot()
})
