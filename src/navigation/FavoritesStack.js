import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import FavoritesPage from '../pages/Favorites'
import ParkDetailsPage from '../pages/ParkDetails'

const FavoritesStack = createStackNavigator()

const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator screenOptions={headerOptions}>
    <FavoritesStack.Screen name="Favorites" component={FavoritesPage} />
    <FavoritesStack.Screen name="ParkDetails" component={ParkDetailsPage} />
  </FavoritesStack.Navigator>
)

export default FavoritesStackScreen
