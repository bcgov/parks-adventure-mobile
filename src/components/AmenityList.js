import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { getAmenityIcon } from '../images/svgs/amenities'
import { List, Item, Text, Divider } from './AmenityList.styles'

const AmenityList = ({ list = [], selected = [] }) => (
  <List>
    {selected.map((id) => {
      const amenity = list.find((item) => item.id === id)
      return amenity ? (
        <View key={id}>
          <Item>
            {getAmenityIcon(amenity.name, true, 30)}
            <Text>{amenity.name}</Text>
          </Item>
          <Divider />
        </View>
      ) : null
    })}
  </List>
)

AmenityList.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.array,
}

export default AmenityList
