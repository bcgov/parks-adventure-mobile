import React from 'react'
import styled from 'styled-components/native'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View } from 'react-native'
import ParksText from './components/ParksText'

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Main = () => {
  const [fontsLoaded] = useFonts({
    bcsans: require('../assets/fonts/BCSans-Regular.otf'),
    'bcsans-bold': require('../assets/fonts/BCSans-Bold.otf'),
    'bcsans-bold-italic': require('../assets/fonts/BCSans-BoldItalic.otf'),
    'bcsans-italic-bold': require('../assets/fonts/BCSans-BoldItalic.otf'),
    'bcsans-italic': require('../assets/fonts/BCSans-Italic.otf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
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
