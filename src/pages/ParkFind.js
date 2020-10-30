import React from 'react'
import PropTypes from 'prop-types'
import { DataContext } from '../utils/DataContext'
import ParkFindHeader from '../components/ParkFindHeader'
import { ParkFindContainer } from './ParkFind.styles'

function ParkFind({ navigation }) {
  const { onSearch, filteredList } = React.useContext(DataContext)
  const [searchTerm, onChangeSearchTerm] = React.useState('')

  return (
    <ParkFindContainer>
      <ParkFindHeader
        searchTerm={searchTerm}
        onChangeText={onChangeSearchTerm}
        onSearch={() => onSearch(searchTerm)}
        showFilter={() => navigation.navigate('Filter')}
        count={filteredList.length}
      />
    </ParkFindContainer>
  )
}

ParkFind.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ParkFind
