import React from 'react'
import PropTypes from 'prop-types'
import haversine from 'haversine'
import { DataContext } from '../utils/DataContext'
import ParkFindHeader from '../components/ParkFindHeader'
import ParkList from '../components/ParkList'
import { ParkFindContainer, ParkListContainer } from './ParkFind.styles'

function ParkFind({ navigation }) {
  const {
    applyFilters,
    filteredList,
    filterApplied,
    location,
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
    .map((park) => ({
      ...park,
      distance: haversine(location, park.location).toFixed(0),
    }))
    .sort((a, b) => {
      const distanceToA = haversine(location, a.location)
      const distanceToB = haversine(location, b.location)

      return distanceToA - distanceToB
    })

  return (
    <ParkFindContainer>
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
          onPress={(park) => navigation.navigate('ParkDetails', { park })}
        />
      </ParkListContainer>
    </ParkFindContainer>
  )
}

ParkFind.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ParkFind
