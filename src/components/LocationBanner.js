import React from 'react'
import { DataContext } from '../utils/DataContext'
import { Portal } from 'react-native-paper'
import { Banner, Message } from './LocationBanner.styles'

function LocationBanner() {
  const { location } = React.useContext(DataContext)

  return (
    <Portal>
      {!location && (
        <Banner actions={[]} elevation={10}>
          <Message allowFontScaling={false}>
            To explore nearby parks go to Settings and allow Location access for
            this app.
          </Message>
        </Banner>
      )}
    </Portal>
  )
}

export default LocationBanner
