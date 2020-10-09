import React from 'react'
import { View } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { registerRootComponent } from 'expo'
import {
  configure,
  getStorybookUI,
  addDecorator,
} from '@storybook/react-native'
import { loadStories } from './storyLoader'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from '../src/utils/theme'

const Fonts = ({ storyFn }) => {
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
    return <View>{storyFn()}</View>
  }
}
addDecorator((storyFn) => <Fonts storyFn={storyFn} />)

const ThemeProvider = ({ children }) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
)
addDecorator((storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>)

configure(() => {
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default registerRootComponent(StorybookUIRoot)
