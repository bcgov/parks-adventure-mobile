import React from 'react'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from './utils/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './components/TabNavigator'

const Main = () => {
  const [fontsLoaded] = useFonts({
    bcsans: require('../assets/fonts/BCSans.otf'),
    'bcsans-bold': require('../assets/fonts/BCSans-Bold.otf'),
    'bcsans-bold-italic': require('../assets/fonts/BCSans-Bold-Italic.otf'),
    'bcsans-italic-bold': require('../assets/fonts/BCSans-Bold-Italic.otf'),
    'bcsans-italic': require('../assets/fonts/BCSans-Italic.otf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar style="dark" />
            <TabNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
    )
  }
}

export default Main
