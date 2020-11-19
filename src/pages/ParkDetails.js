import React from 'react'
import PropTypes from 'prop-types'
import haversine from 'haversine'
import { ScrollView, Linking } from 'react-native'
import { useTheme } from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DataContext } from '../utils/DataContext'
import { sortAdvisories } from '../utils/helpers'
import defaultParkImage from '../../assets/defaultParkImage.jpg'
import AlertAccordion from '../components/AlertAccordion'
import MapButton from '../components/MapButton'
import SectionTitle from '../components/SectionTitle'
import AmenityList from '../components/AmenityList'
import HTMLContent from '../components/HTMLContent'
import {
  DetailsPage,
  ParkHeader,
  ParkImage,
  BlackTransparentOverlay,
  TitleSection,
  TitleRow,
  Title,
  Subtitle,
  InformationSection,
  SectionDivider,
  ClippedText,
  Link,
  FeesSection,
  FeesDividerTop,
  FeesDividerBottom,
} from './ParkDetails.styles'
import {} from '../components/CarouselCard.styles'

function ParkDetails({ route }) {
  const { location, activities, facilities } = React.useContext(DataContext)
  const { park } = route.params
  const theme = useTheme()

  const distance = location
    ? haversine(location, park.location).toFixed(0)
    : 'unknown '

  function linkToWebsite() {
    Linking.openURL(park.url)
  }

  return (
    <DetailsPage>
      <ScrollView showsVerticalScrollIndicator={false}>
        {park.status !== 'open' && (
          <AlertAccordion
            key={'closure'}
            headline={park.status}
            description={''}
            type={'closure'}
          />
        )}
        {park.alerts.length > 0
          ? park.alerts
              .sort(sortAdvisories)
              .map((alert) => (
                <AlertAccordion
                  key={alert.AdvisoryID}
                  headline={alert.Headline}
                  description={alert.Description}
                  type={'alert'}
                />
              ))
          : null}

        <ParkHeader>
          {park.status !== 'open' && <BlackTransparentOverlay />}
          <ParkImage
            source={park.imageUri ? { uri: park.imageUri } : defaultParkImage}
            defaultSource={defaultParkImage}
            closure={park.status !== 'open'}
          />
          <MapButton absolute={true} location={park.location} />
        </ParkHeader>

        <TitleSection>
          <TitleRow>
            <Title>{park.title}</Title>
            <MCIcon
              name={park.favorited ? 'heart' : 'heart-outline'}
              size={20}
              color={theme.colors.secondary500}
            />
          </TitleRow>
          <Subtitle>{`Approx. ${distance}km from your current location`}</Subtitle>
        </TitleSection>

        {park.advisories.length > 0
          ? park.advisories
              .sort(sortAdvisories)
              .map((advisory) => (
                <AlertAccordion
                  key={advisory.AdvisoryID}
                  headline={advisory.Headline}
                  description={advisory.Description}
                  type={'advisory'}
                />
              ))
          : null}

        <InformationSection>
          {park.description.length > 0 && (
            <>
              <ClippedText
                numberOfLines={3}
                marginTop={park.advisories.length > 0}>
                {park.description}
              </ClippedText>
              <Link onPress={linkToWebsite}>Read More</Link>
            </>
          )}

          {park.locationNotes.length > 0 && (
            <>
              <SectionDivider />
              <SectionTitle title="Location" icon="map-marker" />
              <ClippedText numberOfLines={3}>{park.locationNotes}</ClippedText>
              <Link onPress={linkToWebsite}>Read More</Link>
              <MapButton absolute={false} location={park.location} />
            </>
          )}
        </InformationSection>

        {park.fees && (
          <>
            <FeesDividerTop />
            <FeesSection>
              <SectionTitle title="User Fees" icon="map-marker" />
            </FeesSection>
            <FeesDividerBottom />
          </>
        )}

        <InformationSection>
          <SectionTitle title="Activities" icon="walk" link={park.url} />
          <AmenityList list={activities} selected={park.activities} />

          <SectionTitle title="Facilities" icon="home" link={park.url} />
          <AmenityList list={facilities} selected={park.facilities} />

          {park.safetyInfo !== undefined && park.safetyInfo.length > 0 && (
            <>
              <SectionTitle title="Park Safety Info" icon="map-marker" />
              <HTMLContent content={park.safetyInfo} />
            </>
          )}

          {park.specialNotes.length > 0 && (
            <>
              <SectionDivider />
              <SectionTitle title="Special Notes" icon="map-marker" />
              <HTMLContent content={park.specialNotes} />
            </>
          )}

          {park.natureAndCulture.length > 0 && (
            <>
              <SectionDivider />
              <SectionTitle title="Nature and Culture" icon="map-marker" />
            </>
          )}
        </InformationSection>
      </ScrollView>
    </DetailsPage>
  )
}

ParkDetails.propTypes = {
  route: PropTypes.object.isRequired,
}

export default ParkDetails
