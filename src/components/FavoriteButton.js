import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'react-native-paper'
import { Pressable } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

function Favorite({ onPress, favorited, size, style }) {
  const theme = useTheme()
  return (
    <Pressable
      hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}
      onPress={onPress}
      style={style}>
      <Icon
        name={favorited ? 'heart' : 'heart-outline'}
        size={size ? size : 24}
        color={theme.colors.secondary500}
        accessibilityLabel="favorite park"
      />
    </Pressable>
  )
}

Favorite.propTypes = {
  onPress: PropTypes.func.isRequired,
  favorited: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default Favorite
