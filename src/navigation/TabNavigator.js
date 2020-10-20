import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from 'react-native-paper'
import ExploreStack from './ExploreStack'
import FavouritesStack from './FavouritesStack'
import FindStack from './FindStack'
import { Label } from './TabNavigator.styles'

/* eslint-disable react/prop-types -- disabling prop validation for inline component declarations */

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => <Label color={color}>{route.name}</Label>,
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.selected,
        inactiveTintColor: theme.colors.disabled,
      }}>
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MCIcon name="pine-tree-box" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MCIcon name="cards-heart" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MIcon name="location-on" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
