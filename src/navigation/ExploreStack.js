import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import ExplorePage from '../pages/Explore'

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
  <ExploreStack.Navigator screenOptions={headerOptions}>
    <ExploreStack.Screen name="Explore" component={ExplorePage} />
  </ExploreStack.Navigator>
)

export default ExploreStackScreen
