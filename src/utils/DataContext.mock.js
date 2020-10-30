import React from 'react'
import PropTypes from 'prop-types'
import { DataContext } from './DataContext'

export function DataProvider({ children }) {
  return (
    <DataContext.Provider
      value={{
        parks: [
          {
            ORCSSITE: '361',
            ParkSiteNameWeb:
              'Adams Lake Provincial Park &ndash; Bush Creek Site',
            ParkSiteNameBasic: 'Adams Lake Provincial Park - Bush Creek Site',
            Latitude: '50.987578',
            Longitude: '-119.725971',
            Activities: [],
            Facilities: [],
          },
          {
            ORCSSITE: '9229',
            ParkSiteNameWeb: 'Gowlland Tod Provincial Park',
            ParkSiteNameBasic: 'Gowlland Tod Provincial Park',
            Latitude: '48.546011',
            Longitude: '-123.509934',
            Activities: [],
            Facilities: [],
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
        onSearch: jest.fn(),
        applyFilters: jest.fn(),
        resetFilters: jest.fn(),
        filteredList: [],
      }}>
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.object,
}
