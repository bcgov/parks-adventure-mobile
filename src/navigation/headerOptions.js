import React from 'react'
import theme from '../utils/theme'
import NavigationHeader from './NavigationHeader'

const headerOptions = {
  title: '',
  headerStyle: {
    backgroundColor: theme.colors.primary,
    shadowColor: 'transparent',
  },
  headerLeft: () => <NavigationHeader />,
}

export default headerOptions
