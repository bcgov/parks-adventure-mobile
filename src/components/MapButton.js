import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Clipboard } from 'react-native'
import { Portal, useTheme } from 'react-native-paper'
import { Button, Icon, Text, Snackbar } from './MapButton.styles'

function MapButton({ location, absolute = true }) {
  const theme = useTheme()
  const [snackbarVisible, setSnackbarVisibility] = React.useState(false)
  function openMaps() {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`
    )
  }

  function copyLocation() {
    Clipboard.setString(`${location.latitude},${location.longitude}`)
    setSnackbarVisibility(true)
  }

  return (
    <>
      <Button
        accessibilityLabel={'map-link'}
        onPress={openMaps}
        onLongPress={copyLocation}
        elevation={6}
        absolute={absolute}>
        <Icon name={'map-outline'} size={18} />
        <Text allowFontScaling={false}>Maps</Text>
      </Button>

      <Portal>
        <Snackbar
          theme={{ colors: { accent: theme.colors.secondary50 } }}
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisibility(false)}
          action={{
            label: 'Ok',
            onPress: () => setSnackbarVisibility(false),
          }}>
          Location copied to Clipboard.
        </Snackbar>
      </Portal>
    </>
  )
}

MapButton.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  }),
  absolute: PropTypes.bool,
}

export default MapButton
