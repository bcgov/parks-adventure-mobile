import {
  getClosestParksByAmenityTypeAndID,
  filterParks,
  sortAdvisories,
  sortParks,
  addDistanceToParks,
} from './helpers'

const parks = [
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
  {
    id: '361',
    title: 'Adams Lake Provincial Park - Bush Creek Site',
    searchableTitle: 'Adams Lake Provincial Park - Bush Creek Site',
    location: {
      latitude: '50.987578',
      longitude: '-119.725971',
    },
    activities: ['1'],
    facilities: ['3'],
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

const advisories = [
  {
    Rank: '1000',
    AdvisoryDate: '2020-05-06 8:40:29 AM',
    Headline: 'Rushing water conditions &ndash; USE EXTREME CAUTION',
    Description:
      'The access trail leading into Evanoff Provincial Park, to Fang Trailhead, crosses a creek. The current water levels are high; it is not advised to cross during high or rushing water conditions. Visitors are urged to use extreme caution when crossing this creek, or consider to reschedule their visit for another time.',
  },
  {
    Rank: '3',
    AdvisoryDate: '2020-07-30 3:22:54 PM',
    Headline: 'Access to Lake Lovely Water trailhead',
    Description:
      'Access is from the west side of the Squamish River. The east side of the river is First Nations land and BC Parks does not recommend using the dirt road to access the trailhead due to land use issues. Use of the cable car is also PROHIBITED. Helicopter and boat services are available, see the Location section below for further details.',
  },
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

test('sortAdvisories sorts based on Rank', () => {
  advisories.sort(sortAdvisories)
  expect(advisories[0].Headline).toBe('Access to Lake Lovely Water trailhead')
})

test('sortAdvisories sorts based on AdvisoryDate if no or equal Rank', () => {
  const alerts = [
    { ...advisories[0], Rank: '0' },
    { ...advisories[1], Rank: '0' },
  ]
  alerts.sort(sortAdvisories)
  expect(alerts[0].Headline).toBe('Access to Lake Lovely Water trailhead')
})

test('sortParks sorted based on distance if location provided', () => {
  parks.sort((a, b) => sortParks(location, a, b))
  expect(parks[0].searchableTitle).toBe('Gowlland Tod Provincial Park')
})

test('sortParks sorted based on park name if no location provided', () => {
  parks.sort((a, b) => sortParks(undefined, a, b))
  expect(parks[0].searchableTitle).toBe(
    'Adams Lake Provincial Park - Bush Creek Site'
  )
})

test('addDistanceToParks adds distance string to park if location provided', () => {
  const results = parks.map((park) => addDistanceToParks(location, park))
  expect.assertions(4)

  results.forEach((item) => {
    expect(item).toHaveProperty('distance')
    expect(parseInt(item.distance)).toEqual(expect.any(Number))
  })
})

test("addDistanceToParks adds 'unknown'  string to park if no location provided", () => {
  const results = parks.map((park) => addDistanceToParks(null, park))
  expect.assertions(4)

  results.forEach((item) => {
    expect(item).toHaveProperty('distance')
    expect(item.distance).toEqual('unknown ')
  })
})
