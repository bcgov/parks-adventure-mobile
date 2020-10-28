import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import headerOptions from './headerOptions'
import ComingSoon from '../components/ComingSoon'

const FindDrawer = createDrawerNavigator()

const FindDrawerScreen = () => (
  <FindDrawer.Navigator drawerPosition={'right'} screenOptions={headerOptions}>
    <FindDrawer.Screen name="Filter" component={ComingSoon} />
  </FindDrawer.Navigator>
)

const FindStack = createStackNavigator()

const FindStackScreen = () => (
  <FindStack.Navigator screenOptions={headerOptions}>
    <FindStack.Screen name="Find" component={FindDrawerScreen} />
  </FindStack.Navigator>
)

export default FindStackScreen
