import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import FavouritesPage from '../pages/Favourites'

const FavouritesStack = createStackNavigator()

const FavouritesStackScreen = () => (
  <FavouritesStack.Navigator screenOptions={headerOptions}>
    <FavouritesStack.Screen name="Favourites" component={FavouritesPage} />
  </FavouritesStack.Navigator>
)

export default FavouritesStackScreen
