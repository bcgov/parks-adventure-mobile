import React from 'react'
import PropTypes from 'prop-types'
import { DataContext } from '../utils/DataContext'
import { sortParks, addDistanceToParks } from '../utils/helpers'
import ParkFindHeader from '../components/ParkFindHeader'
import ParkList from '../components/ParkList'
import LocationBanner from '../components/LocationBanner'
import { ParkFindPage, ParkListContainer } from './ParkFind.styles'

function ParkFind({ navigation }) {
  const {
    applyFilters,
    filteredList,
    filterApplied,
    location,
    setPark,
    favoritePark,
  } = React.useContext(DataContext)
  const [searchTerm, onChangeSearchTerm] = React.useState('')

  /*
   * Acts as a 'clear search term' behaviour trigger
   */
  React.useEffect(() => {
    if (searchTerm === '') {
      applyFilters(searchTerm)
    }
  }, [searchTerm])

  const parks = filteredList
    .map((park) => addDistanceToParks(location, park))
    .sort((a, b) => sortParks(location, a, b))

  return (
    <ParkFindPage locationNotAvailable={!location}>
      <LocationBanner />
      <ParkFindHeader
        searchTerm={searchTerm}
        onChangeText={onChangeSearchTerm}
        onSearch={() => applyFilters(searchTerm)}
        showFilter={() => navigation.navigate('Filter')}
        filterApplied={filterApplied}
        count={filteredList.length}
      />
      <ParkListContainer>
        <ParkList
          parks={parks}
          onFavoritePress={favoritePark}
          onPress={(park) => {
            setPark(park)
            navigation.navigate('ParkDetails')
          }}
        />
      </ParkListContainer>
    </ParkFindPage>
  )
}

ParkFind.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ParkFind
