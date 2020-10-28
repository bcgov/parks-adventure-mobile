import React from 'react'
import { useTheme, IconButton } from 'react-native-paper'

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

const DATA = [
  { id: '1', favorited: true },
  { id: '2', favorited: false },
  { id: '3', favorited: true },
  { id: '4', favorited: false },
]

const ParkList = () => {
  const theme = useTheme()

  const renderParkItem = ({ item }) => (
    <ItemContainer>
      <ItemImage source={defaultParkImage} />
      <ColumnContainer>
        <RowContainer>
          <Title>Hello</Title>

          <IconButton
            icon="cards-heart"
            size={24}
            color={
              item.favorited ? theme.colors.favorited : theme.colors.disabled
            }
            onPress={() => console.log('pressed')}
          />
        </RowContainer>
        <DistanceText>83KM AWAY</DistanceText>
      </ColumnContainer>
    </ItemContainer>
  )

  return (
    <Container
      data={DATA}
      renderItem={renderParkItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ParkList
