import React from 'react'
import PropTypes from 'prop-types'
import haversine from 'haversine'
import {
  defaultDistanceFilter,
  getClosestParksByAmenityTypeAndID,
} from '../utils/helpers'
import { DataContext } from '../utils/DataContext'
import CarouselCard from '../components/CarouselCard'
import CarouselHeader from '../components/CarouselHeader'
import LocationBanner from '../components/LocationBanner'
import {
  ExplorePage,
  ExploreScrollView,
  ExploreSection,
  ParkCardContainer,
  ExploreHeader,
  RisingSun,
} from './Explore.styles.js'
import headerBackgroundSrc from '../../assets/exploreHeader.jpeg'
import ExploreSvg from '../../assets/exploreTitle.svg'
import risingSunSrc from '../../assets/sunWithShadow.png'

function Explore({ navigation }) {
  const { parks, location, favoritePark } = React.useContext(DataContext)

  const subheading = location
    ? `Within ${defaultDistanceFilter}km`
    : 'Within BC'
  const hikingParks = getClosestParksByAmenityTypeAndID(
    'activities',
    '1',
    location,
    parks
  )
  const swimmingParks = getClosestParksByAmenityTypeAndID(
    'activities',
    '3',
    location,
    parks
  )
  const vehicleCampingParks = getClosestParksByAmenityTypeAndID(
    'facilities',
    '1',
    location,
    parks
  )

  return (
    <ExplorePage>
      <LocationBanner />

      <ExploreScrollView
        showsVerticalScrollIndicator={false}
        locationNotAvailable={!location}>
        <ExploreHeader source={headerBackgroundSrc}>
          <ExploreSvg height="70" />
          <RisingSun source={risingSunSrc} />
        </ExploreHeader>

        {/* Hiking - ActivityID = 1 */}
        <CarouselHeader
          title={`Great Hikes${location ? ' Near Me' : ''}`}
          subheading={subheading}
          icon={'Hiking'}
        />
        <ExploreSection
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={hikingParks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.id}
              index={index}
              length={hikingParks.length}>
              <CarouselCard
                onPress={() =>
                  navigation.navigate('ParkDetails', { park: item })
                }
                title={item.title}
                uri={item.uri}
                alerts={item.alerts}
                advisories={item.advisories}
                distance={haversine(location, item.location).toFixed(0)}
                favorited={item.favorited}
                onFavoritePress={() => favoritePark(item.id)}
              />
            </ParkCardContainer>
          )}
        />

        {/* Swimming - ActivityID = 3 */}
        <CarouselHeader
          title={`Swimming Holes${location ? ' Near Me' : ''}`}
          subheading={subheading}
          icon={'Swimming'}
        />
        <ExploreSection
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={swimmingParks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.id}
              index={index}
              length={swimmingParks.length}>
              <CarouselCard
                onPress={() =>
                  navigation.navigate('ParkDetails', { park: item })
                }
                title={item.title}
                uri={item.uri}
                alerts={item.alerts}
                advisories={item.advisories}
                distance={haversine(location, item.location).toFixed(0)}
                favorited={item.favorited}
                onFavoritePress={() => favoritePark(item.id)}
              />
            </ParkCardContainer>
          )}
        />

        {/* Vehicle-Accessible Camping - FacilityID = 1 */}
        <CarouselHeader
          title={`Vehicle Camping${location ? ' Near Me' : ''}`}
          subheading={subheading}
          icon={'Vehicle-Accessible Camping'}
        />
        <ExploreSection
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={vehicleCampingParks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.id}
              index={index}
              length={vehicleCampingParks.length}>
              <CarouselCard
                onPress={() =>
                  navigation.navigate('ParkDetails', { park: item })
                }
                title={item.title}
                uri={item.uri}
                alerts={item.alerts}
                advisories={item.advisories}
                distance={haversine(location, item.location).toFixed(0)}
                favorited={item.favorited}
                onFavoritePress={() => favoritePark(item.id)}
              />
            </ParkCardContainer>
          )}
        />
      </ExploreScrollView>
    </ExplorePage>
  )
}

Explore.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Explore
