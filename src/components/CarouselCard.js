import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, useTheme } from 'react-native-paper'
import { AllHtmlEntities } from 'html-entities'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
import {
  Carousel,
  CardCover,
  ParkTitle,
  CardContent,
  ContentLine,
  ParkDistance,
  CardBanner,
} from './CarouselCard.styles'

const entities = new AllHtmlEntities()

function CarouselCard({
  title,
  distance,
  uri,
  onFavoritePress,
  advisories = [],
  favorited = false,
}) {
  const theme = useTheme()

  const alertCount = advisories.reduce(
    (sum, advisory) => (advisory.Alert === 'Y' ? sum + 1 : sum),
    0
  )
  //  Format advisory banner message text
  let advisoryMessage
  if (advisories.length === 1) advisoryMessage = advisories[0].Headline
  else if (advisories.length > 0) {
    if (alertCount === 0) advisoryMessage = `${advisories.length} Advisories`
    else
      advisoryMessage = `${advisories.length} ${
        advisories.length === alertCount ? 'Alerts' : 'Alerts/Advisories'
      }`
  }

  return (
    <Carousel elevation={6}>
      <CardCover
        defaultSource={defaultParkImage}
        source={uri ? { uri } : defaultParkImage}
        resizeMode="cover">
        {advisories.length > 0 && (
          <CardBanner numberOfLines={1} alert={alertCount > 0}>
            {advisoryMessage}
          </CardBanner>
        )}
      </CardCover>
      <CardContent>
        <ContentLine>
          <ParkTitle numberOfLines={3}>{entities.decode(title)}</ParkTitle>
          <IconButton
            icon={favorited ? 'heart' : 'heart-outline'}
            size={20}
            color={theme.colors.secondary500}
            onPress={onFavoritePress}
            accessibilityLabel="favorite park"
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
  onFavoritePress: PropTypes.func.isRequired,
  favorited: PropTypes.bool,
  advisories: PropTypes.arrayOf(
    PropTypes.shape({
      Alert: PropTypes.string.isRequired,
      Headline: PropTypes.string.isRequired,
    })
  ),
}

export default CarouselCard
