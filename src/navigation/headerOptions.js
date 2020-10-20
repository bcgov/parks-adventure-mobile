import React from 'react'
import theme from '../utils/theme'
import NavigationHeader from './NavigationHeader'

const headerOptions = {
  title: '',
  headerStyle: {
    height: 60,
    backgroundColor: theme.colors.primary,
  },
  headerLeft: () => <NavigationHeader />,
}

export default headerOptions
