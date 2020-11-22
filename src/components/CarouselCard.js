import React from 'react'
import PropTypes from 'prop-types'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
import { getParkTypeIcon } from '../images/svgs/parkTypes'
import FavoriteButton from './FavoriteButton'
import {
  Carousel,
  CardCover,
  ParkTitle,
  CardContent,
  ContentLine,
  ParkDistance,
  CardBanner,
  AdvisoryText,
  BlackTransparentOverlay,
} from './CarouselCard.styles'

function CarouselCard({ onPress, onFavoritePress, park, distance }) {
  const {
    title,
    parkType,
    imageUri,
    status,
    favorited,
    alerts,
    advisories,
  } = park

  //  Format advisory banner message text
  const closure = status !== 'open'
  const totalAdvisoryCount = alerts.length + advisories.length
  let advisoryMessage

  if (closure) {
    advisoryMessage = status
  } else if (totalAdvisoryCount === 1 && alerts.length === 1) {
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
        imageStyle={{
          borderTopLeftRadius: 13,
          borderTopRightRadius: 13,
        }}
        closure={closure}
        defaultSource={defaultParkImage}
        source={imageUri ? { uri: imageUri } : defaultParkImage}
        resizeMode="cover">
        {(totalAdvisoryCount > 0 || closure) && (
          <>
            {closure && <BlackTransparentOverlay />}
            <CardBanner alert={alerts.length > 0} closure={closure}>
              <AdvisoryText
                numberOfLines={1}
                alert={alerts.length > 0}
                closure={closure}>
                {advisoryMessage}
              </AdvisoryText>
            </CardBanner>
          </>
        )}
      </CardCover>
      <CardContent>
        <ContentLine>
          <ParkTitle numberOfLines={3}>{title}</ParkTitle>
          <FavoriteButton
            onPress={onFavoritePress}
            favorited={favorited}
            size={20}
          />
        </ContentLine>
        <ContentLine>
          {getParkTypeIcon(parkType)}
          <ParkDistance>{`${distance}KM AWAY`}</ParkDistance>
        </ContentLine>
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
    parkType: PropTypes.oneOf(['PK', 'RA', 'ER', 'CS', 'PA']),
    status: PropTypes.string.isRequired,
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
