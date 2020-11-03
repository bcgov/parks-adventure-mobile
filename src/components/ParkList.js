import React from 'react'
import { useTheme, IconButton } from 'react-native-paper'
import PropTypes from 'prop-types'
import { AllHtmlEntities } from 'html-entities'
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

const entities = new AllHtmlEntities()

const ParkList = ({ parks, onFavoritePress }) => {
  const theme = useTheme()

  const renderParkItem = ({ item }) => (
    <ItemContainer>
      <ItemImage
        source={item.uri ? { uri: item.uri } : defaultParkImage}
        defaultSource={defaultParkImage}
      />
      <ColumnContainer>
        <RowContainer>
          <Title>{entities.decode(item.title)}</Title>

          <IconButton
            icon="cards-heart"
            size={24}
            color={
              item.favorited ? theme.colors.favorited : theme.colors.disabled
            }
            onPress={() => onFavoritePress(item)}
            accessibilityLabel="favorite park"
          />
        </RowContainer>
        <DistanceText>
          {item.distance ? `${item.distance}KM AWAY` : ''}
        </DistanceText>
      </ColumnContainer>
    </ItemContainer>
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
  onFavoritePress: PropTypes.func,
}

export default ParkList
