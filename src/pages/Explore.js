import React from 'react'
import * as Location from 'expo-location'
import haversine from 'haversine'
import { getParks } from '../utils/data'
import { distanceFilter, getClosestParksByID } from '../utils/helpers'
import CarouselCard from '../components/CarouselCard'
import CarouselHeader from '../components/CarouselHeader'
import {
  ExplorePage,
  ExploreScrollView,
  ExploreHeader,
  ExploreSection,
  ParkCardContainer,
} from './Explore.styles.js'

const Explore = () => {
  const [parks, setParks] = React.useState([])
  const [location, setLocation] = React.useState(null)

  React.useEffect(() => {
    let subscription
    ;(async () => {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') return

      const location = await Location.getCurrentPositionAsync({})
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })

      subscription = await Location.watchPositionAsync({}, (location) =>
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      )
    })()

    return () => {
      if (subscription) {
        subscription.remove()
      }
    }
  }, [])

  React.useEffect(() => {
    async function loadData() {
      const data = await getParks()
      if (data) {
        setParks(data)
      }
    }
    loadData()
  }, [])

  const subheading = `Within ${distanceFilter}km of your location`
  const hikingParks = getClosestParksByID('Activities', '1', location, parks)
  const swimmingParks = getClosestParksByID('Activities', '3', location, parks)
  const vehicleCampingParks = getClosestParksByID(
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
          icon={require('../images/icons/activity/hiking.png')}
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
          icon={require('../images/icons/activity/swimming.png')}
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
          icon={require('../images/icons/facility/vehicle-accessible-camping.png')}
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
