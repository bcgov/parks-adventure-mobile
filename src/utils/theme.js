import { DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    selected: '#309D9C',
    favorited: '#DA71B7',
    error: '#FF0C3E',
  },
  fonts: {
    regular: {
      fontFamily: 'bcsans',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'bcsans-bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'bcsans',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'bcsans',
      fontWeight: 'normal',
    },
  },
}

export default theme
