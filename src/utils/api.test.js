import AsyncStorage from '@react-native-community/async-storage'
import {
  fetchParks,
  getParks,
  setLocation,
  getLocation,
  fetchActivities,
  getActivities,
  fetchFacilities,
  getFacilities,
} from './api'

describe('parks', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  test('Verify fetchPark() calls AsyncStorage.setItem', async () => {
    await fetchParks()
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'parks',
      expect.anything()
    )
  })

  test('Verify getParks() calls AsyncStorage.getItem', async () => {
    await getParks()
    expect(AsyncStorage.getItem).toHaveBeenCalled()
  })

  test('Verify fetchParks merges the data sets', async () => {
    const results = await getParks()
    expect(results).not.toBeNull()
    expect(results).toBeInstanceOf(Array)
    expect(results[0]).toHaveProperty('activities')
    expect(results[0].activities.length).toBeGreaterThan(0)
    expect(results[0]).toHaveProperty('facilities')
    expect(results[0].facilities.length).toBeGreaterThan(0)
    expect(results[0]).toHaveProperty('uri')
    expect(results[0]).toHaveProperty('advisories')
    /**
     * NOTE: This assertion is very fragile as not every park will have
     * advisories. Since the information is static data, this test will pass as
     * long as the static data doesn't change. This data will eventually be
     * pulled in from an API, so I didn't think it was worth spending too much
     * time on it.
     */
    expect(results[0].advisories.length).toBeGreaterThan(0)
  })
})

describe('location', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  test('Verify setLocation() calls AsyncStorage.setItem', async () => {
    await setLocation()
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'userLocation',
      expect.anything()
    )
  })

  test('Verify getLocation() calls AsyncStorage.getItem', async () => {
    await getLocation()
    expect(AsyncStorage.getItem).toHaveBeenCalled()
  })
})

describe('activities', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  test('Verify fetchActivities() calls AsyncStorage.setItem', async () => {
    await fetchActivities()
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'activities',
      expect.anything()
    )
  })

  test('Verify getActivities() calls AsyncStorage.getItem', async () => {
    await getActivities()
    expect(AsyncStorage.getItem).toHaveBeenCalled()
  })
})

describe('facilities', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  test('Verify fetchFacilities() calls AsyncStorage.setItem', async () => {
    await fetchFacilities()
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'facilities',
      expect.anything()
    )
  })

  test('Verify getFacilities() calls AsyncStorage.getItem', async () => {
    await getFacilities()
    expect(AsyncStorage.getItem).toHaveBeenCalled()
  })
})
