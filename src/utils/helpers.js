import haversine from 'haversine'

const maxDistance = 100000
export const defaultDistanceFilter = 100

export function getClosestParksByAmenityTypeAndID(
  type,
  id,
  currentLocation,
  parks
) {
  const parksByType = parks.filter(
    (park) =>
      park[type].includes(id) &&
      currentLocation &&
      haversine(currentLocation, {
        latitude: park.Latitude,
        longitude: park.Longitude,
      }) <= defaultDistanceFilter
  )

  if (currentLocation) {
    parksByType.sort((a, b) => {
      const distanceToA = haversine(currentLocation, {
        latitude: a.Latitude,
        longitude: a.Longitude,
      })

      const distanceToB = haversine(currentLocation, {
        latitude: b.Latitude,
        longitude: b.Longitude,
      })

      return distanceToA - distanceToB
    })
  }

  return parksByType
}

export function searchParks(parks, searchTerm) {
  return parks.filter((park) =>
    park.ParkSiteNameBasic.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

export function filterParks(parks, location, distance, activities, facilities) {
  const filterDistance = distance >= 99 ? maxDistance : distance
  const filteredParks = parks.filter((park) => {
    const matchesLocationCriteria =
      location &&
      haversine(location, {
        latitude: park.Latitude,
        longitude: park.Longitude,
      }) <= filterDistance

    /*
     * Activity Filters
     */
    let matchesActivityCriteria = true
    const selectedActivityIDs = activities.filter(
      (activity) => activity.selected
    )
    if (selectedActivityIDs.length === 0) {
      // If no activities have been selected, it matches the Activity critera
      matchesActivityCriteria = true
    } else {
      /*
       * If some activities have been selected, the park must contain all of
       * those activities to pass the Activity critera
       */
      selectedActivityIDs.forEach(({ id }) => {
        if (!park.Activities.includes(id)) {
          matchesActivityCriteria = false
        }
      })
    }

    /*
     * Facility Filters
     */
    let matchesFacilityCriteria = true
    const selectedFacilityIDs = facilities.filter(
      (facility) => facility.selected
    )
    if (selectedFacilityIDs.length === 0) {
      // If no facilities have been selected, it matches the Facility critera
      matchesFacilityCriteria = true
    } else {
      /*
       * If some facilities have been selected, the park must contain all of
       * those facilities to pass the Facility critera
       */
      selectedFacilityIDs.forEach(({ id }) => {
        if (!park.Facilities.includes(id)) {
          matchesFacilityCriteria = false
        }
      })
    }

    return (
      matchesLocationCriteria &&
      matchesActivityCriteria &&
      matchesFacilityCriteria
    )
  })

  return filteredParks
}
