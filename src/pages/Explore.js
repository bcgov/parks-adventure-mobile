import React from 'react'
import haversine from 'haversine'
import {
  distanceFilter,
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

  const subheading = `Within ${distanceFilter}km of your location`
  const hikingParks = getClosestParksByAmenityTypeAndID(
    'Activities',
    '1',
    location,
    parks
  )
  const swimmingParks = getClosestParksByAmenityTypeAndID(
    'Activities',
    '3',
    location,
    parks
  )
  const vehicleCampingParks = getClosestParksByAmenityTypeAndID(
    'Facilities',
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
          keyExtractor={(item) => item.ORCSSite}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.ORCSSite}
              index={index}
              length={hikingParks.length}>
              <CarouselCard
                title={item.ParkSiteNameWeb}
                distance={
                  location
                    ? haversine(location, {
                        latitude: item.Latitude,
                        longitude: item.Longitude,
                      }).toFixed(0)
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
          keyExtractor={(item) => item.ORCSSite}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.ORCSSite}
              index={index}
              length={swimmingParks.length}>
              <CarouselCard
                title={item.ParkSiteNameWeb}
                distance={
                  location
                    ? haversine(location, {
                        latitude: item.Latitude,
                        longitude: item.Longitude,
                      }).toFixed(0)
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
          keyExtractor={(item) => item.ORCSSite}
          renderItem={({ item, index }) => (
            <ParkCardContainer
              key={item.ORCSSite}
              index={index}
              length={vehicleCampingParks.length}>
              <CarouselCard
                title={item.ParkSiteNameWeb}
                distance={
                  location
                    ? haversine(location, {
                        latitude: item.Latitude,
                        longitude: item.Longitude,
                      }).toFixed(0)
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
