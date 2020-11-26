import React from 'react'
import { DataContext } from '../utils/DataContext'
import { Portal } from 'react-native-paper'
import { useHeaderHeight } from '@react-navigation/stack'
import { Banner, Message } from './LocationBanner.styles'

function LocationBanner() {
  const headerHeight = useHeaderHeight()
  const { location } = React.useContext(DataContext)

  return (
    <Portal>
      {!location && (
        <Banner actions={[]} elevation={10} headerHeight={headerHeight}>
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
