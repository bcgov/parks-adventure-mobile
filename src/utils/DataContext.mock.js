import React from 'react'
import PropTypes from 'prop-types'
import { DataContext } from './DataContext'

export function DataProvider({ children }) {
  return (
    <DataContext.Provider
      value={{
        parks: [
          {
            id: '361',
            title: 'Adams Lake Provincial Park - Bush Creek Site',
            searchableTitle: 'Adams Lake Provincial Park - Bush Creek Site',
            location: {
              latitude: '50.987578',
              longitude: '-119.725971',
            },
            activities: [],
            facilities: [],
            favorited: true,
          },
          {
            id: '9229',
            title: 'Gowlland Tod Provincial Park',
            searchableTitle: 'Gowlland Tod Provincial Park',
            location: {
              latitude: '48.546011',
              longitude: '-123.509934',
            },
            activities: [],
            facilities: [],
          },
        ],
        location: { latitude: '48.4557', longitude: '-123.3387' },
        distance: 100,
        setDistance: jest.fn(),
        activities: [
          { id: '1', name: 'Hiking', selected: false },
          { id: '3', name: 'Swimming', selected: false },
        ],
        updateActivities: jest.fn(),
        facilities: [
          { id: '1', name: 'Vehicle-Accessible Camping', selected: false },
          { id: '2', name: 'Walk-In Camping', selected: false },
        ],
        updateFacilities: jest.fn(),
        applyFilters: jest.fn(),
        resetFilters: jest.fn(),
        filteredList: [],
        filterApplied: false,
        favoritePark: jest.fn(),
      }}>
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.object,
}
