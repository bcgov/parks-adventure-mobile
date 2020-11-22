import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      name: 'Find',
    }),
  }
})

jest.mock('react-native-paper', () => ({
  ...jest.requireActual('react-native-paper'),
  IconButton: 'Icon',
}))

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native')
  return {
    MaterialCommunityIcons: View,
  }
})
