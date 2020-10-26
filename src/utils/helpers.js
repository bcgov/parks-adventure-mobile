import haversine from 'haversine'

export const distanceFilter = 50

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
      }) <= distanceFilter
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
