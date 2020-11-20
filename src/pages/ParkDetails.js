import React from 'react'
import PropTypes from 'prop-types'
import haversine from 'haversine'
import { ScrollView, Linking } from 'react-native'
import { useTheme } from 'react-native-paper'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DataContext } from '../utils/DataContext'
import { sortAdvisories, removeHTMLFormatting } from '../utils/helpers'
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
  DescriptionSection,
  ClippedText,
  Link,
} from './ParkDetails.styles'

function ParkDetails({ route }) {
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false)
  const [locationExpanded, setLocationExpanded] = React.useState(false)
  const { location, activities, facilities, favoritePark } = React.useContext(
    DataContext
  )
  const { park } = route.params
  const theme = useTheme()

  const distance = location
    ? haversine(location, park.location).toFixed(0)
    : 'unknown '

  function onLinkPress(event, href) {
    Linking.openURL(`${park.url}${href.replace('/', '')}`)
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
              onPress={() => favoritePark(park.id)}
              accessibilityLabel="favorite park"
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
            <DescriptionSection marginTop={park.advisories.length > 0}>
              {!descriptionExpanded ? (
                <ClippedText numberOfLines={!descriptionExpanded ? 3 : null}>
                  {removeHTMLFormatting(park.description)}
                </ClippedText>
              ) : (
                <HTMLContent
                  content={park.description}
                  onLinkPress={onLinkPress}
                />
              )}
              <Link
                onPress={() => setDescriptionExpanded(!descriptionExpanded)}>
                Read {!descriptionExpanded ? 'more' : 'less'}
              </Link>
            </DescriptionSection>
          )}

          {park.locationNotes.length > 0 && (
            <>
              <SectionDivider />
              <SectionTitle title="Location" icon="map-marker" />
              {!locationExpanded ? (
                <ClippedText numberOfLines={3}>
                  {removeHTMLFormatting(park.locationNotes)}
                </ClippedText>
              ) : (
                <HTMLContent
                  content={park.locationNotes}
                  onLinkPress={onLinkPress}
                />
              )}
              <Link onPress={() => setLocationExpanded(!locationExpanded)}>
                Read {!locationExpanded ? 'more' : 'less'}
              </Link>
              <MapButton absolute={false} location={park.location} />
            </>
          )}
        </InformationSection>

        <InformationSection>
          {park.activities.length > 0 && (
            <>
              <SectionTitle title="Activities" icon="walk" link={park.url} />
              <AmenityList list={activities} selected={park.activities} />
            </>
          )}

          {park.facilities.length > 0 && (
            <>
              <SectionTitle title="Facilities" icon="home" link={park.url} />
              <AmenityList list={facilities} selected={park.facilities} />
            </>
          )}

          {park.safetyInfo !== undefined && park.safetyInfo.length > 0 && (
            <>
              <SectionTitle title="Park Safety Info" icon="first-aid" />
              <HTMLContent
                content={park.safetyInfo}
                onLinkPress={onLinkPress}
              />
              <SectionDivider />
            </>
          )}

          {park.natureAndCulture.length > 0 && (
            <>
              <SectionTitle title="Nature and Culture" icon="nature" />
              <HTMLContent
                content={park.natureAndCulture}
                onLinkPress={onLinkPress}
              />
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
