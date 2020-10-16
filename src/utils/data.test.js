import AsyncStorage from '@react-native-community/async-storage'
import { fetchParks, getParks } from './data'

test('Verify fetchPark() calls AsyncStorage.setItem', async () => {
  await fetchParks()
  expect(AsyncStorage.setItem).toHaveBeenCalledWith('parks', expect.anything())
})

test('Verify getParks() calls AsyncStorage.getItem', async () => {
  await getParks()
  expect(AsyncStorage.getItem).toHaveBeenCalled()
})

test('Verify fetchParks merges the data sets', async () => {
  const results = await getParks()
  expect(results).not.toBeNull()
  expect(results).toBeInstanceOf(Array)
  expect(results[0]).toHaveProperty('Activities')
  expect(results[0].Activities.length).toBeGreaterThan(0)
  expect(results[0]).toHaveProperty('Facilities')
  expect(results[0].Facilities.length).toBeGreaterThan(0)
})
