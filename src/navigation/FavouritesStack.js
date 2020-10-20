import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import headerOptions from './headerOptions'
import ComingSoon from '../components/ComingSoon'

const FavouritesStack = createStackNavigator()

const FavouritesStackScreen = () => (
  <FavouritesStack.Navigator screenOptions={headerOptions}>
    <FavouritesStack.Screen name="Favourites" component={ComingSoon} />
  </FavouritesStack.Navigator>
)

export default FavouritesStackScreen
