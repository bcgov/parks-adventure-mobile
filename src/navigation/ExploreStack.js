import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import ExplorePage from '../pages/Explore'
import ParkDetailsPage from '../pages/ParkDetails'

const ExploreStack = createStackNavigator()

const ExploreStackScreen = () => (
  <ExploreStack.Navigator screenOptions={headerOptions}>
    <ExploreStack.Screen name="Explore" component={ExplorePage} />
    <ExploreStack.Screen name="ParkDetails" component={ParkDetailsPage} />
  </ExploreStack.Navigator>
)

export default ExploreStackScreen
