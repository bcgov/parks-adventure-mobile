import React from 'react'
import { render } from '@testing-library/react-native'
import HTMLContent from './HTMLContent'

const content = '<div>Main paragraph</div>'

test('HTML content gets transformed into react-native Text', () => {
  const { queryByText } = render(<HTMLContent content={content} />)

  const noText = queryByText(content)
  expect(noText).toBeNull()

  const text = queryByText('Main paragraph')
  expect(text).toBeDefined()
})
