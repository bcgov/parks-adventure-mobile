import React from 'react'
import PropTypes from 'prop-types'
import { getParks, getLocation, getActivities, getFacilities } from './api'
import { defaultDistanceFilter, filterParks } from './helpers'

export const DataContext = React.createContext()

export function DataProvider({ children }) {
  const [parks, setParks] = React.useState([])
  const [location, setLocation] = React.useState()
  const [distance, setDistance] = React.useState(defaultDistanceFilter)
  const [searchTerm, updateSearchTerm] = React.useState('')
  const [activities, updateActivities] = React.useState([])
  const [originalActivities, setOriginalActivities] = React.useState([])
  const [facilities, updateFacilities] = React.useState([])
  const [originalFacilities, setOriginalFacilities] = React.useState([])
  const [filteredList, updateFilteredList] = React.useState([])

  React.useEffect(() => {
    async function loadData() {
      const parks = await getParks()
      setParks(parks)
      updateFilteredList(parks)

      const location = await getLocation()
      setLocation(location)

      const activities = await getActivities()
      updateActivities(activities)
      setOriginalActivities(JSON.parse(JSON.stringify(activities)))

      const facilities = await getFacilities()
      updateFacilities(JSON.parse(JSON.stringify(facilities)))
      setOriginalFacilities(facilities)
    }
    loadData()
  }, [])

  React.useEffect(() => {
    applyFilters()
  }, [parks, location, distance, activities, facilities])

  function changeActivitySelectionState(id) {
    const index = activities.findIndex((activity) => activity.id === id)
    const newActivityList = [...activities]
    newActivityList[index].selected = !newActivityList[index].selected
    updateActivities(newActivityList)
  }

  function changeFacilitySelectionState(id) {
    const index = facilities.findIndex((facility) => facility.id === id)
    const newFacilityList = [...facilities]
    newFacilityList[index].selected = !newFacilityList[index].selected
    updateFacilities(newFacilityList)
  }

  function applyFilters(searchString) {
    if (searchString !== undefined) {
      updateSearchTerm(searchString)
    }

    const results = filterParks({
      parks,
      searchTerm: searchString === undefined ? searchTerm : searchString,
      location,
      distance,
      activities,
      facilities,
    })
    updateFilteredList(results)
  }

  function resetFilters() {
    setDistance(defaultDistanceFilter)
    updateActivities(originalActivities)
    updateFacilities(originalFacilities)
  }

  function favoritePark(id) {
    const index = parks.findIndex((park) => park.id === id)
    const newList = [...parks]
    newList[index].favorited = !parks[index].favorited
    setParks(newList)
  }

  return (
    <DataContext.Provider
      value={{
        parks,
        location,
        distance,
        setDistance,
        activities,
        updateActivities: changeActivitySelectionState,
        facilities,
        updateFacilities: changeFacilitySelectionState,
        applyFilters,
        resetFilters,
        filteredList,
        filterApplied: parks.length - filteredList.length > 0,
        favoritePark,
      }}>
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.array,
}
