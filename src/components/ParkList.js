import React from 'react'
import { Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { useRoute } from '@react-navigation/native'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
import FavoriteButton from './FavoriteButton'
import {
  Container,
  ItemContainer,
  ItemImage,
  Title,
  DistanceText,
  ColumnContainer,
  RowContainer,
} from './ParkList.styles'

const ParkList = ({ parks, onPress, onFavoritePress }) => {
  const route = useRoute()
  const renderParkItem = ({ item, index }) => (
    <Pressable
      accessibilityLabel={'navigate to park details'}
      onPress={() => onPress(item)}>
      <ItemContainer noTopBorder={index === 0 && route.name === 'Favorites'}>
        <ItemImage
          source={item.imageUri ? { uri: item.imageUri } : defaultParkImage}
          defaultSource={defaultParkImage}
        />
        <ColumnContainer>
          <RowContainer>
            <Title>{item.title}</Title>
            <FavoriteButton
              onPress={() => onFavoritePress(item.id)}
              favorited={item.favorited}
              style={{ margin: 12 }}
            />
          </RowContainer>
          <DistanceText>
            {item.distance ? `${item.distance}KM AWAY` : ''}
          </DistanceText>
        </ColumnContainer>
      </ItemContainer>
    </Pressable>
  )

  return (
    <Container
      data={parks}
      renderItem={renderParkItem}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    />
  )
}

ParkList.propTypes = {
  parks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      distance: PropTypes.string,
      imageUri: PropTypes.string,
      favorited: PropTypes.bool,
    })
  ).isRequired,
  onPress: PropTypes.func.isRequired,
  onFavoritePress: PropTypes.func,
}

export default ParkList
