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
  getStorageFavorites,
  updateStorageFavorites,
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
    expect(results[0]).toHaveProperty('url')
    expect(results[0]).toHaveProperty('imageUri')
    expect(results[0]).toHaveProperty('favorited', false)
    expect(results[0]).toHaveProperty('description')
    expect(results[0].description.length).toBeGreaterThan(0)
    expect(results[0]).toHaveProperty('locationNotes')
    expect(results[0]).toHaveProperty('specialNotes')
    expect(results[0]).toHaveProperty('natureAndCulture')
    expect(results[0]).toHaveProperty('advisories')
    expect(results[0]).toHaveProperty('alerts')
    /**
     * NOTE: This assertion is very fragile as not every park will have
     * advisories. Since the information is static data, this test will pass as
     * long as the static data doesn't change. This data will eventually be
     * pulled in from an API, so I didn't think it was worth spending too much
     * time on it.
     */
    expect(results[0].advisories.length).toBeGreaterThan(0)
    expect(results[0].alerts.length).toBeGreaterThan(0)
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

describe('favorites', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  test('Verify updateStorageFavorites() adds/removes existing favorites', async () => {
    await updateStorageFavorites('1')
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('favorites')
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('favorites', '["1"]')
  })

  test('Verify getStorageFavorites() calls AsyncStorage.getItem', async () => {
    await getStorageFavorites()
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('favorites')
  })
})
