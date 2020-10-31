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
  ExploreHeader,
  ExploreSection,
  ParkCardContainer,
} from './Explore.styles.js'

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
      <ExploreScrollView>
        {/* Hiking - ActivityID = 1 */}
        <ExploreHeader />
        <CarouselHeader
          title="Great Hikes Near You"
          subheading={subheading}
          icon={'Hiking'}
        />
        <ExploreSection
          horizontal={true}
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
                distance={
                  location
                    ? haversine(location, item.location).toFixed(0)
                    : null
                }
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
          data={swimmingParks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.id}
              index={index}
              length={swimmingParks.length}>
              <CarouselCard
                title={item.title}
                distance={
                  location
                    ? haversine(location, item.location).toFixed(0)
                    : null
                }
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
          data={vehicleCampingParks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.id}
              index={index}
              length={vehicleCampingParks.length}>
              <CarouselCard
                title={item.title}
                distance={
                  location
                    ? haversine(location, item.location).toFixed(0)
                    : null
                }
              />
            </ParkCardContainer>
          )}
        />
      </ExploreScrollView>
    </ExplorePage>
  )
}

export default Explore
