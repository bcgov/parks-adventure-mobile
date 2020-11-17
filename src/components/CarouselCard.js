import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
import {
  Carousel,
  CardCover,
  ParkTitle,
  CardContent,
  ContentLine,
  ParkDistance,
  CardBanner,
  AdvisoryText,
} from './CarouselCard.styles'

function CarouselCard({ onPress, onFavoritePress, park, distance }) {
  const theme = useTheme()
  const { title, imageUri, favorited, alerts, advisories } = park

  //  Format advisory banner message text
  const totalAdvisoryCount = alerts.length + advisories.length
  let advisoryMessage

  if (totalAdvisoryCount === 1 && alerts.length === 1) {
    advisoryMessage = alerts[0].Headline
  } else if (totalAdvisoryCount === 1 && advisories.length === 1) {
    advisoryMessage = advisories[0].Headline
  } else {
    if (alerts.length === 0) {
      advisoryMessage = `${advisories.length} Advisories`
    } else if (advisories.length === 0) {
      advisoryMessage = `${alerts.length} Alerts`
    } else {
      advisoryMessage = `${totalAdvisoryCount} Alerts/Advisories`
    }
  }

  return (
    <Carousel
      accessibilityLabel={'navigate to park details'}
      elevation={6}
      onPress={onPress}>
      <CardCover
        imageStyle={{ borderTopLeftRadius: 13, borderTopRightRadius: 13 }}
        defaultSource={defaultParkImage}
        source={imageUri ? { imageUri } : defaultParkImage}
        resizeMode="cover">
        {totalAdvisoryCount > 0 && (
          <CardBanner alert={alerts.length > 0}>
            <AdvisoryText numberOfLines={1} alert={alerts.length > 0}>
              {advisoryMessage}
            </AdvisoryText>
          </CardBanner>
        )}
      </CardCover>
      <CardContent>
        <ContentLine>
          <ParkTitle numberOfLines={3}>{title}</ParkTitle>
          <MCIcon
            name={favorited ? 'heart' : 'heart-outline'}
            size={20}
            color={theme.colors.secondary500}
            onPress={onFavoritePress}
            accessibilityLabel="favorite park"
          />
        </ContentLine>
        <ParkDistance>{`${distance}km Away`}</ParkDistance>
      </CardContent>
    </Carousel>
  )
}

CarouselCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  onFavoritePress: PropTypes.func.isRequired,
  distance: PropTypes.string.isRequired,
  park: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUri: PropTypes.string,
    favorited: PropTypes.bool,
    alerts: PropTypes.arrayOf(
      PropTypes.shape({
        Headline: PropTypes.string.isRequired,
      })
    ),
    advisories: PropTypes.arrayOf(
      PropTypes.shape({
        Headline: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
}

export default CarouselCard
