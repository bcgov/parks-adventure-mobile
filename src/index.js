import React from 'react'
import styled from 'styled-components/native'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View } from 'react-native'
import ParksText from './components/ParksText'

const fonts = {
  'bcsans': require('../assets/fonts/BCSans-Regular.ttf'),
  'bcsans-bold': require('../assets/fonts/BCSans-Bold.ttf'),
  'bcsans-bold-italic': require('../assets/fonts/BCSans-BoldItalic.ttf'),
  'bcsans-italic-bold': require('../assets/fonts/BCSans-BoldItalic.ttf'),
  'bcsans-italic': require('../assets/fonts/BCSans-Italic.ttf'),
}

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Main = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false)

  async function loadFonts() {
    await Font.loadAsync(fonts)
  }

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setFontsLoaded(true)
        }}
      />
    )
  } else {
    return (
      <SafeAreaProvider>
        <Container>
          <StatusBar style="auto" />
          <ParksText>
            An exciting adventure awaits you in the BC Parks!
          </ParksText>
        </Container>
      </SafeAreaProvider>
    )
  }
}

export default Main
