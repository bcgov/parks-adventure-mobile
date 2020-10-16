import AsyncStorage from '@react-native-community/async-storage'
import protectedLands from '../../assets/protected-lands-status.json'
import activities from '../../assets/protected-lands-activity-xref.json'
import facilities from '../../assets/protected-lands-facility-xref.json'

const KEYS = {
  parks: 'parks',
}

export async function fetchParks() {
  try {
    /*const response = await fetch(
      'http://bcparks.ca/_shared/json/protected-lands-status.json'
    )
    const protectedLands = await response.json()
    if (!protectedLands) return*/

    /**
     * Get unique parks and sort by the parks basic name
     */
    const keys = []
    const parks = {}
    protectedLands['protected-lands-status']
      .sort((a, b) => a.ParkSiteNameBasic > b.ParkSiteNameBasic)
      .forEach((park) => {
        if (keys.includes(park.ORCSSite)) return

        keys.push(park.ORCSSite)
        parks[park.ORCSSite] = { ...park, Activities: [], Facilities: [] }
      })

    /**
     * Attach associated activities for each park
     */
    activities['protected-lands-activity-xref'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite]) return

      parks[entry.ORCSSite].Activities.push(entry.ActivityID)
    })

    /**
     * Attach associated facilities to each park
     */
    facilities['protected-lands-facility-xref'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite]) return

      parks[entry.ORCSSite] = {
        ...parks[entry.ORCSSite],
        Facilities: [...parks[entry.ORCSSite].Facilities, entry.FacilityID],
      }
    })

    await AsyncStorage.setItem(KEYS.parks, JSON.stringify(Object.values(parks)))
  } catch (error) {
    console.warn('Failed to fetch park data', error)
  }
}

export async function getParks() {
  try {
    const data = await AsyncStorage.getItem(KEYS.parks)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.warn(error)
  }
}
