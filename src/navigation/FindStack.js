import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import headerOptions from './headerOptions'
import ParkFindPage from '../pages/ParkFind'
import Filter from '../pages/Filter'
import ParkDetailsPage from '../pages/ParkDetails'

const FindStack = createStackNavigator()

const FindStackScreen = () => (
  <FindStack.Navigator initialRouteName={'Find'} screenOptions={headerOptions}>
    <FindStack.Screen name="Find" component={ParkFindPage} />
    <FindStack.Screen
      name="Filter"
      component={Filter}
      options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <FindStack.Screen name="ParkDetails" component={ParkDetailsPage} />
  </FindStack.Navigator>
)

export default FindStackScreen
