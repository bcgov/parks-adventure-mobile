import AsyncStorage from '@react-native-community/async-storage'
import * as Location from 'expo-location'
import move from 'array-move'
import protectedLands from '../../assets/protected-lands-status.json'
import parkDetails from '../../assets/protected-land-details.json'
import photosXref from '../../assets/protected-lands-photos.json'
import activitiesXref from '../../assets/protected-lands-activity-xref.json'
import facilitiesXref from '../../assets/protected-lands-facility-xref.json'
import advisoriesXref from '../../assets/public-advisory-xref.json'
import activities from '../../assets/activity.json'
import facilities from '../../assets/facility.json'
import advisories from '../../assets/public-advisory.json'

import { AllHtmlEntities } from 'html-entities'
const entities = new AllHtmlEntities()

const KEYS = {
  pages: 'pages',
  parks: 'parks',
  location: 'userLocation',
  activities: 'activities',
  facilities: 'facilities',
  favorites: 'favorites',
}

export async function fetchParks() {
  try {
    /*
     * Get list of existing favorites to attach to new data
     */
    const favorites = await getStorageFavorites()

    /*
     * Get unique parks and sort by the parks basic name
     */
    const keys = []
    const parks = {}
    protectedLands['protected-lands-status']
      .sort((a, b) => a.ParkSiteNameBasic > b.ParkSiteNameBasic)
      .forEach((park) => {
        if (keys.includes(park.ORCSSite) || !park.ParkSiteNameWeb) return

        keys.push(park.ORCSSite)
        parks[park.ORCSSite] = {
          id: park.ORCSSite,
          parkType: park.ParkType,
          title: entities.decode(park.ParkSiteNameWeb),
          url: park.ParkURL,
          searchableTitle: park.ParkSiteNameBasic,
          location: {
            latitude: park.Latitude,
            longitude: park.Longitude,
          },
          status: park.AccessStatus,
          favorited: favorites.includes(park.ORCSSite),
          activities: [],
          facilities: [],
          alerts: [],
          advisories: [],
          description: '',
          locationNotes: '',
          safetyInfo: '',
          specialNotes: '',
          natureAndCulture: '',
        }
      })

    /*
     * Attach park information
     */
    parkDetails['protected-land-details'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite]) return

      parks[entry.ORCSSite] = {
        ...parks[entry.ORCSSite],
        description: entities.decode(entry.Description),
        // Remove (Google) Location Map list link from location string
        locationNotes: entities.decode(
          entry.LocationNotes.replace(
            /<ul>\s*<li>\s*<a href="\/explore\/map.html">.*<\/a>\s*<\/li>\s*<\/ul>/g,
            ''
          )
        ),
        safetyInfo: entities.decode(entry.SafetyInfo),
        natureAndCulture: entities.decode(entry.NatureAndCulture),
      }
    })

    /*
     * Attach associated activities for each park
     */
    activitiesXref['protected-lands-activity-xref'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite]) return

      parks[entry.ORCSSite].activities.push(entry.ActivityID)
    })

    /*
     * Attach associated facilities to each park
     */
    facilitiesXref['protected-lands-facility-xref'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite]) return

      parks[entry.ORCSSite].facilities.push(entry.FacilityID)
    })

    /*
     * Attach image uri to each park
     */
    photosXref['protected-lands-photos'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite] || entry.Feature === 'N')
        return

      parks[entry.ORCSSite].imageUri = entry.Thumbnail
    })

    /*
     * Attach associated advisories to each park
     */
    const advisoryList = advisories['public-advisory']
    const advisoryObject = {}
    advisoryList.forEach((item) => (advisoryObject[item.AdvisoryID] = item))

    advisoriesXref['public-advisory-xref'].forEach((entry) => {
      if (!entry.ORCSSite || !parks[entry.ORCSSite]) return

      const item = advisoryObject[entry.AdvisoryID]
      if (!item) return

      if (item.Alert === 'Y') {
        parks[entry.ORCSSite].alerts.push({
          ...item,
          Headline: entities.decode(item.Headline),
        })
      } else {
        parks[entry.ORCSSite].advisories.push({
          ...item,
          Headline: entities.decode(item.Headline),
        })
      }
    })

    /*
     * Android uses SQL Lite storage under the hood and under the current
     * implementaiton it throws a "Row too big to fit into CursorWindow" error
     * so we've "paginated" the data for storage.
     */
    const storageData = Object.values(parks)
    const pageLength = 100
    const numOfPages = Math.ceil(storageData.length / pageLength)
    await AsyncStorage.setItem(KEYS.pages, `${numOfPages}`)
    const pages = Array.from(Array(numOfPages).keys())
    const setPairs = pages.map((_, index) => {
      return [
        `${KEYS.parks}_p.${index}`,
        JSON.stringify(
          storageData.slice(pageLength * index, pageLength * index + pageLength)
        ),
      ]
    })
    await AsyncStorage.multiSet(setPairs)
  } catch (error) {
    console.warn('Failed to fetch park data', error)
  }
}

export async function getParks() {
  try {
    /*
     * Android uses SQL Lite storage under the hood and under the current
     * implementaiton it's throw a "Row too big to fit into CursorWindow" error
     * so we've "paginated" the data for storage.
     */
    const numOfPages = await AsyncStorage.getItem(KEYS.pages)
    const pages = Array.from(Array(parseInt(numOfPages)).keys())
    const getPairs = pages.map((_, index) => `${KEYS.parks}_p.${index}`)
    const data = await AsyncStorage.multiGet(getPairs)
    const combined = []
    data.forEach((value) => combined.push(...JSON.parse(value[1])))
    return combined
  } catch (error) {
    console.warn(error)
    return []
  }
}

export async function setLocation() {
  try {
    let permissions = await Location.getPermissionsAsync()
    if (permissions.status !== 'granted') {
      permissions = await Location.requestPermissionsAsync()
    }

    if (permissions.status === 'granted') {
      const location = await Location.getCurrentPositionAsync({})

      await AsyncStorage.setItem(
        KEYS.location,
        JSON.stringify({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      )
    } else {
      await AsyncStorage.removeItem(KEYS.location)
    }
  } catch (error) {
    console.warn(error)
  }
}

export async function getLocation() {
  try {
    const data = await AsyncStorage.getItem(KEYS.location)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.warn(error)
  }
}

export async function fetchActivities() {
  try {
    const list = activities['activity']

    // Move the Hiking activity to position 1
    const hikingIndex = list.findIndex((item) => item.ActivityID === '1')
    move.mutate(list, hikingIndex, 0)

    // Move the Swimming activity to position 2
    const swimingIndex = list.findIndex((item) => item.ActivityID === '3')
    move.mutate(list, swimingIndex, 1)

    // Move the Canoeing activity to position 3
    const canoeingIndex = list.findIndex((item) => item.ActivityID === '4')
    move.mutate(list, canoeingIndex, 2)

    const selectionList = list.map((activity) => ({
      id: activity.ActivityID,
      name: activity.Activity,
      selected: false,
    }))

    await AsyncStorage.setItem(KEYS.activities, JSON.stringify(selectionList))
  } catch (error) {
    console.warn(error)
  }
}

export async function getActivities() {
  try {
    const data = await AsyncStorage.getItem(KEYS.activities)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.warn(error)
    return []
  }
}

export async function fetchFacilities() {
  try {
    const list = facilities['facility']

    // Move the Accessibility Info facility to position 1
    const accessibilityInfoIndex = list.findIndex(
      (item) => item.FacilityID === '11'
    )
    move.mutate(list, accessibilityInfoIndex, 0)

    // Move the Vehicle-Accessible Camping facility to position 2
    const vehicleAccessCampingIndex = list.findIndex(
      (item) => item.FacilityID === '1'
    )
    move.mutate(list, vehicleAccessCampingIndex, 1)

    // Move the Walk-In Camping facility to position 3
    const walkInCampingIndex = list.findIndex((item) => item.FacilityID === '2')
    move.mutate(list, walkInCampingIndex, 2)

    const selectionList = list.map((facility) => ({
      id: facility.FacilityID,
      name: facility.Facility,
      selected: false,
    }))

    await AsyncStorage.setItem(KEYS.facilities, JSON.stringify(selectionList))
  } catch (error) {
    console.warn(error)
  }
}

export async function getFacilities() {
  try {
    const data = await AsyncStorage.getItem(KEYS.facilities)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.warn(error)
    return []
  }
}

export async function updateStorageFavorites(id) {
  try {
    const results = await AsyncStorage.getItem(KEYS.favorites)
    let data = results ? JSON.parse(results) : []

    if (data.includes(id)) {
      data = data.filter((item) => item !== id)
    } else {
      data.push(id)
    }
    await AsyncStorage.setItem(KEYS.favorites, JSON.stringify(data))
  } catch (error) {
    console.warn(error)
  }
}

export async function getStorageFavorites() {
  try {
    const data = await AsyncStorage.getItem(KEYS.favorites)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.warn(error)
    return []
  }
}
