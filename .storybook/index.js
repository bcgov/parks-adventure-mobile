import { registerRootComponent } from 'expo'
import { configure, getStorybookUI } from '@storybook/react-native'
import { loadStories } from './storyLoader'

configure(() => {
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
})

export default registerRootComponent(StorybookUIRoot)
