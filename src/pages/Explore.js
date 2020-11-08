import React from 'react'
import haversine from 'haversine'
import {
  defaultDistanceFilter,
  getClosestParksByAmenityTypeAndID,
} from '../utils/helpers'
import { DataContext } from '../utils/DataContext'
import CarouselCard from '../components/CarouselCard'
import CarouselHeader from '../components/CarouselHeader'
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

function Explore() {
  const { parks, location } = React.useContext(DataContext)

  const subheading = `Within ${defaultDistanceFilter}km of your location`
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
      <ExploreScrollView showsVerticalScrollIndicator={false}>
        <ExploreHeader source={headerBackgroundSrc}>
          <ExploreSvg width="234" height="28" />
          <RisingSun source={risingSunSrc} />
        </ExploreHeader>
        {/* Hiking - ActivityID = 1 */}
        <CarouselHeader
          title="Great Hikes Near You"
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
                title={item.title}
                uri={item.uri}
                alerts={item.alerts}
                advisories={item.advisories}
                distance={haversine(location, item.location).toFixed(0)}
              />
            </ParkCardContainer>
          )}
        />

        {/* Swimming - ActivityID = 3 */}
        <CarouselHeader
          title="Swimming Holes Near You"
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
                title={item.title}
                uri={item.uri}
                alerts={item.alerts}
                advisories={item.advisories}
                distance={haversine(location, item.location).toFixed(0)}
              />
            </ParkCardContainer>
          )}
        />

        {/* Vehicle-Accessible Camping - FacilityID = 1 */}
        <CarouselHeader
          title="Vehicle Camping Near You"
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
                title={item.title}
                uri={item.uri}
                alerts={item.alerts}
                advisories={item.advisories}
                distance={haversine(location, item.location).toFixed(0)}
              />
            </ParkCardContainer>
          )}
        />
      </ExploreScrollView>
    </ExplorePage>
  )
}

export default Explore
