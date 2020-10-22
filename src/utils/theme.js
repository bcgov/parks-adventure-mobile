import { DefaultTheme, configureFonts } from 'react-native-paper'

const fontConfig = {
  default: {
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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#294071',
    background: '#FFF',
    selected: '#309D9C',
    favorited: '#DA71B7',
    error: '#FF0C3E',
    grey3: '#828282',
  },
  fonts: configureFonts(fontConfig),
}

export default theme
