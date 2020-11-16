import React from 'react'
import PropTypes from 'prop-types'
import { render, waitFor } from '@testing-library/react-native'
import { DataProvider } from '../utils/DataContext.mock'
import { Provider, Portal } from 'react-native-paper'
import LocationBanner from './LocationBanner'

const regex = /go to Settings/gi

const Element = ({ location }) => (
  <Provider>
    <DataProvider value={!location ? { location: undefined } : null}>
      <Portal.Host>
        <LocationBanner />
      </Portal.Host>
    </DataProvider>
  </Provider>
)

Element.propTypes = {
  location: PropTypes.bool,
}

test('LocationBanner should not be visible if location available', async () => {
  const { queryByText } = render(<Element location={true} />)
  await waitFor(() => {
    const banner = queryByText(regex, { exact: false })
    expect(banner).toBeNull()
  })
})

test('LocationBanner should be visible if no location provided', async () => {
  const { getByText } = render(<Element location={false} />)
  await waitFor(() => {
    const banner = getByText(regex, { exact: false })
    expect(banner).toBeDefined()
  })
})
