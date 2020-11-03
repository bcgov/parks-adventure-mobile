import { getClosestParksByAmenityTypeAndID, filterParks } from './helpers'

const parks = [
  {
    id: '361',
    title: 'Adams Lake Provincial Park &ndash; Bush Creek Site',
    searchableTitle: 'Adams Lake Provincial Park - Bush Creek Site',
    location: {
      latitude: '50.987578',
      longitude: '-119.725971',
    },
    activities: ['1'],
    facilities: ['3'],
  },
  {
    id: '9229',
    title: 'Gowlland Tod Provincial Park',
    searchableTitle: 'Gowlland Tod Provincial Park',
    location: {
      latitude: '48.546011',
      longitude: '-123.509934',
    },
    activities: ['1'],
    facilities: ['1'],
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
    'activities',
    '1',
    location,
    parks
  )

  expect(results).toHaveLength(1)
})

test('getClosestParksByAmenityTypeAndID: Does not return parks within 100km if they do not have the activity indicated', () => {
  const results = getClosestParksByAmenityTypeAndID(
    'activities',
    '2',
    { latitude: '48.4557', longitude: '-123.3387' },
    parks
  )

  expect(results).toHaveLength(0)
})

test('filterParks: Returns only parks whose name contain the search term', () => {
  const results = filterParks({
    parks,
    searchTerm: 'Adam',
    location,
    distance: 100,
    activities: [],
    facilities: [],
  })
  expect(results).toHaveLength(1)
  expect(results[0]).toHaveProperty(
    'searchableTitle',
    'Adams Lake Provincial Park - Bush Creek Site'
  )
})

test('filterParks: filters parks based on distance away', () => {
  // Return only parks within 50km
  const containingParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 50,
    activities: [],
    facilities: [],
  })
  expect(containingParks).toHaveLength(1)

  // Return no parks if non within the distance bounds
  const notContainingParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 1,
    activities: [],
    facilities: [],
  })
  expect(notContainingParks).toHaveLength(0)

  // Returns all parks if the distance is greater than 100km
  const allParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 100,
    activities: [],
    facilities: [],
  })
  expect(allParks).toHaveLength(2)
})

test('filterParks: returns only parks which have all indicated activities', () => {
  // Returns parks that contain ALL indicated activities
  const containingParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 100,
    activities: [activities[0]],
    facilities: [],
  })
  expect(containingParks).toHaveLength(2)
})

test('filterParks: does not return parks if they do not contain ALL indicated activities', () => {
  const notContainingParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 100,
    activities,
    facilities: [],
  })
  expect(notContainingParks).toHaveLength(0)
})

test('filterParks: returns only parks which have all indicated facilities', () => {
  // Returns parks that contain ALL indicated facilities
  const containingParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 100,
    activities: [],
    facilities: [facilities[0]],
  })
  expect(containingParks).toHaveLength(1)
})

test('filterParks: does not return parks if they do not contain ALL indicated facilities', () => {
  const notContainingParks = filterParks({
    parks,
    searchTerm: undefined,
    location,
    distance: 100,
    activities: [],
    facilities,
  })
  expect(notContainingParks).toHaveLength(0)
})
