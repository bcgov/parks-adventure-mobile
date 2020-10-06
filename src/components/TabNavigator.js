import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, useTheme } from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { Label, CenterView } from './TabNavigator.styles'

/* eslint-disable react/prop-types -- disabling prop validation for inline component declarations */

const Tab = createBottomTabNavigator()

function ComingSoon() {
  return (
    <CenterView>
      <Text>Coming Soon!</Text>
    </CenterView>
  )
}

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
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <MCIcon name="pine-tree-box" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <MCIcon name="cards-heart" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={ComingSoon}
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
