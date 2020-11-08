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
  let filteredParks = parks

  // Filter parks based on search string
  if (searchTerm) {
    filteredParks = filteredParks.filter((park) =>
      park.searchableTitle.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Filter based on location/distance
  if (location) {
    const filterDistance = distance >= 99 ? maxDistance : distance
    filteredParks = filteredParks.filter(
      (park) => haversine(location, park.location) <= filterDistance
    )
  }

  // Filter based on park activities
  const selectedActivityIDs = activities.filter((activity) => activity.selected)
  if (selectedActivityIDs.length > 0) {
    filteredParks = filteredParks.filter((park) =>
      selectedActivityIDs.every(({ id }) => park.activities.includes(id))
    )
  }

  // Filter based on park facilities
  const selectedFacilityIDs = facilities.filter((facility) => facility.selected)
  if (selectedFacilityIDs.length > 0) {
    filteredParks = filteredParks.filter((park) =>
      selectedFacilityIDs.every(({ id }) => park.facilities.includes(id))
    )
  }

  return filteredParks
}

export function sort(a, b) {
  return a.Rank.localeCompare(b.Rank) || a.AdvisoryDate - b.AdvisoryDate
}
