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
    primary50: '#E2E7F3',
    primary100: '#B8C3E0',
    secondary50: '#FADA85',
    secondary900: '#9F7B2F',
    secondary500: '#DBA947',
    secondary300: '#DBB972',
    secondary100: '#E2C890',
    background: '#FFF',
    disabled: 'rgba(0, 0, 0, 0.53)',
    alert: '#FF0C3E',
    grey: '#828282',
    whiteDisabled: 'rgba(255, 255, 255, 0.5)',
  },
  fonts: configureFonts(fontConfig),
}

export default theme
