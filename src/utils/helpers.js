import haversine from 'haversine'

const maxDistance = 100000
export const defaultDistanceFilter = 100

export function getClosestParksByAmenityTypeAndID(
  type,
  id,
  currentLocation,
  parks
) {
  let parksByType = parks.filter((park) => park[type].includes(id))

  if (currentLocation) {
    parksByType = parksByType.filter(
      (park) =>
        haversine(currentLocation, park.location) <= defaultDistanceFilter
    )
  }

  return parksByType.sort((a, b) => sortParks(currentLocation, a, b))
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

export function sortAdvisories(a, b) {
  // Sort in ascending Rank order
  if (a.Rank !== b.Rank) {
    return parseInt(a.Rank) - parseInt(b.Rank)
  }

  // If ranks are equal, sort from newest to oldest release date
  return b.AdvisoryDate.localeCompare(a.AdvisoryDate)
}

export function sortParks(location, a, b) {
  // Sort based on proximity to the user
  if (location) {
    const distanceToA = haversine(location, a.location)
    const distanceToB = haversine(location, b.location)
    return distanceToA - distanceToB
  }

  // If the users location is unknown, sort in alphabetical order
  return a.searchableTitle
    .toUpperCase()
    .localeCompare(b.searchableTitle.toUpperCase())
}

export function addDistanceToParks(location, park) {
  return {
    ...park,
    distance: location
      ? haversine(location, park.location).toFixed(0)
      : 'unknown ',
  }
}

export function removeHTMLFormatting(string) {
  return string
    .replace(/<\/?p[^>]*>/g, '')
    .replace(/<img[^>]*>/g, '')
    .replace(/<\/?a[^>].*<\/a>/g, '')
    .replace(/(<([^>]+)>)/g, '')
    .trim()
}
