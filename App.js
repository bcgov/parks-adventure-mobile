import React from 'react'
import { registerRootComponent } from 'expo'

import Main from './src'
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => (
  <PaperProvider>
    <Main />
  </PaperProvider>
)

registerRootComponent(App)

export default App
