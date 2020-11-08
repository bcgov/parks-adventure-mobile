import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useTheme, IconButton } from 'react-native-paper'
import PropTypes from 'prop-types'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
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
  const theme = useTheme()

  const renderParkItem = ({ item }) => (
    <TouchableWithoutFeedback
      accessibilityLabel={'navigate to park details'}
      onPress={() => onPress(item)}>
      <ItemContainer>
        <ItemImage
          source={item.uri ? { uri: item.uri } : defaultParkImage}
          defaultSource={defaultParkImage}
        />
        <ColumnContainer>
          <RowContainer>
            <Title>{item.title}</Title>

            <IconButton
              icon={item.favorited ? 'heart' : 'heart-outline'}
              size={24}
              color={theme.colors.secondary500}
              onPress={() => onFavoritePress(item)}
              accessibilityLabel="favorite park"
            />
          </RowContainer>
          <DistanceText>
            {item.distance ? `${item.distance}KM AWAY` : ''}
          </DistanceText>
        </ColumnContainer>
      </ItemContainer>
    </TouchableWithoutFeedback>
  )

  return (
    <Container
      data={parks}
      renderItem={renderParkItem}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
    />
  )
}

ParkList.propTypes = {
  parks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      distance: PropTypes.string,
      uri: PropTypes.string,
      favorited: PropTypes.bool,
    })
  ).isRequired,
  onPress: PropTypes.func.isRequired,
  onFavoritePress: PropTypes.func,
}

export default ParkList
