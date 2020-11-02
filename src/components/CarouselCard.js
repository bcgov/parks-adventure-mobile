import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AllHtmlEntities } from 'html-entities'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
import {
  Carousel,
  CardCover,
  ParkTitle,
  CardContent,
  ContentLine,
  ParkDistance,
} from './CarouselCard.styles'

const entities = new AllHtmlEntities()

function CarouselCard({ title, distance, uri, favorited = false }) {
  const theme = useTheme()

  return (
    <Carousel elevation={6}>
      <CardCover
        defaultSource={defaultParkImage}
        source={uri ? { uri } : defaultParkImage}
        resizeMode={'contain'}
      />
      <CardContent>
        <ContentLine>
          <ParkTitle>{entities.decode(title)}</ParkTitle>
          <MCIcon
            name="heart"
            size={20}
            color={favorited ? theme.colors.favorited : theme.colors.disabled}
          />
        </ContentLine>
        {distance && <ParkDistance>{`${distance}km Away`}</ParkDistance>}
      </CardContent>
    </Carousel>
  )
}

CarouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  distance: PropTypes.string,
  uri: PropTypes.string,
  favorited: PropTypes.bool,
}

export default CarouselCard
