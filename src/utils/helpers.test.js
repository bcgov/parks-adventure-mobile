import {
  getClosestParksByAmenityTypeAndID,
  searchParks,
  filterParks,
} from './helpers'

const parks = [
  {
    ORCSSITE: '361',
    ParkSiteNameWeb: 'Adams Lake Provincial Park &ndash; Bush Creek Site',
    ParkSiteNameBasic: 'Adams Lake Provincial Park - Bush Creek Site',
    Latitude: '50.987578',
    Longitude: '-119.725971',
    Activities: ['1'],
    Facilities: ['3'],
  },
  {
    ORCSSITE: '9229',
    ParkSiteNameWeb: 'Gowlland Tod Provincial Park',
    ParkSiteNameBasic: 'Gowlland Tod Provincial Park',
    Latitude: '48.546011',
    Longitude: '-123.509934',
    Activities: ['1'],
    Facilities: ['1'],
  },
]

// Victoria
const location = { latitude: '48.4557', longitude: '-123.3387' }

const activities = [
  { id: '1', name: 'Hiking', selected: true },
  { id: '3', name: 'Swimming', selected: true },
]
const facilities = [
  { id: '1', name: 'Vehicle-Accessible Camping', selected: true },
  { id: '2', name: 'Walk-In Camping', selected: true },
]

test('getClosestParksByAmenityTypeAndID: Get all parks within 100km which have the amenity indicated', () => {
  /* props: type, id, currentLocation, parks */
  const results = getClosestParksByAmenityTypeAndID(
    'Activities',
    '1',
    location,
    parks
  )

  expect(results).toHaveLength(1)
})

test('getClosestParksByAmenityTypeAndID: Does not return parks within 100km if they do not have the activity indicated', () => {
  const results = getClosestParksByAmenityTypeAndID(
    'Activities',
    '2',
    { latitude: '48.4557', longitude: '-123.3387' },
    parks
  )

  expect(results).toHaveLength(0)
})

test('searchParks: Returns only parks whose name contain the search term', () => {
  const results = searchParks(parks, 'Adam')
  expect(results).toHaveLength(1)
  expect(results[0]).toHaveProperty(
    'ParkSiteNameBasic',
    'Adams Lake Provincial Park - Bush Creek Site'
  )
})

test('filterParks: filters parks based on distance away', () => {
  // Return only parks within 50km
  const containingParks = filterParks(parks, location, 50, [], [])
  expect(containingParks).toHaveLength(1)

  // Return no parks if non within the distance bounds
  const notContainingParks = filterParks(parks, location, 1, [], [])
  expect(notContainingParks).toHaveLength(0)

  // Returns all parks if the distance is greater than 100km
  const allParks = filterParks(parks, location, 100, [], [])
  expect(allParks).toHaveLength(2)
})

/* props: parks, location, distance, activities, facilities */
test('filterParks: returns only parks which have all indicated activities', () => {
  // Returns parks that contain ALL indicated activities
  const containingParks = filterParks(parks, location, 100, [activities[0]], [])
  expect(containingParks).toHaveLength(2)
})

test('filterParks: does not return parks if they do not contain ALL indicated activities', () => {
  const notContainingParks = filterParks(parks, location, 100, activities, [])
  expect(notContainingParks).toHaveLength(0)
})

test('filterParks: returns only parks which have all indicated facilities', () => {
  // Returns parks that contain ALL indicated facilities
  const containingParks = filterParks(parks, location, 100, [], [facilities[0]])
  expect(containingParks).toHaveLength(1)
})

test('filterParks: does not return parks if they do not contain ALL indicated facilities', () => {
  const notContainingParks = filterParks(parks, location, 100, [], facilities)
  expect(notContainingParks).toHaveLength(0)
})
