import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import ComingSoon from '../components/ComingSoon'

const FindStack = createStackNavigator()

const FindStackScreen = () => (
  <FindStack.Navigator screenOptions={headerOptions}>
    <FindStack.Screen name="Find" component={ComingSoon} />
  </FindStack.Navigator>
)

export default FindStackScreen
