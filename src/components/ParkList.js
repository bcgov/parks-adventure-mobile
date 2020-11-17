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
          source={item.imageUri ? { uri: item.imageUri } : defaultParkImage}
          defaultSource={defaultParkImage}
        />
        <ColumnContainer>
          <RowContainer>
            <Title>{item.title}</Title>
            <IconButton
              icon={item.favorited ? 'heart' : 'heart-outline'}
              size={24}
              color={theme.colors.secondary500}
              onPress={() => onFavoritePress(item.id)}
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
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
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
