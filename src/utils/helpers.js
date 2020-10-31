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
      haversine(currentLocation, park.location) <= defaultDistanceFilter
  )

  if (currentLocation) {
    parksByType.sort((a, b) => {
      const distanceToA = haversine(currentLocation, a.location)
      const distanceToB = haversine(currentLocation, b.location)

      return distanceToA - distanceToB
    })
  }

  return parksByType
}

export function filterParks({
  parks,
  searchTerm,
  location,
  distance,
  activities,
  facilities,
}) {
  /*
   * Filter parks based on search string
   */
  const searchedParks =
    searchTerm !== undefined
      ? parks.filter((park) =>
          park.searchableTitle.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : parks

  /*
   * Further filter parks based on distance, activity, and facility filters
   */
  const filterDistance = distance >= 99 ? maxDistance : distance
  const filteredParks = searchedParks.filter((park) => {
    const matchesLocationCriteria =
      location && haversine(location, park.location) <= filterDistance

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
        if (!park.activities.includes(id)) {
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
        if (!park.facilities.includes(id)) {
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
