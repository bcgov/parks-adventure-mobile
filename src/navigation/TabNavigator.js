import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { useTheme } from 'react-native-paper'
import ExploreStack from './ExploreStack'
import FavoritesStack from './FavoritesStack'
import FindStack from './FindStack'
import { Label } from './TabNavigator.styles'

/* eslint-disable react/prop-types -- disabling prop validation for inline component declarations */

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => (
          <Label allowFontScaling={false} color={color}>
            {route.name}
          </Label>
        ),
      })}
      tabBarOptions={{
        activeBackgroundColor: theme.colors.primary,
        inactiveBackgroundColor: theme.colors.primary,
        activeTintColor: 'white',
        inactiveTintColor: theme.colors.whiteDisabled,
      }}>
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pine-tree-box" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cards-heart" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="magnify" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
