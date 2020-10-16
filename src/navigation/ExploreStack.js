import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import ComingSoon from '../components/ComingSoon'

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
  <ExploreStack.Navigator screenOptions={headerOptions}>
    <ExploreStack.Screen name="Explore" component={ComingSoon} />
  </ExploreStack.Navigator>
)

export default ExploreStackScreen
