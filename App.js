import 'react-native-gesture-handler'
import React from 'react'
import { registerRootComponent } from 'expo'
import Main from './src'

const App = () => <Main />

registerRootComponent(App)

export default App
