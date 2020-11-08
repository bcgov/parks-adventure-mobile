import React from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Search,
  Content,
  ParkCount,
  FilterText,
  FilterButton,
  FilterIndicator,
} from './ParkFindHeader.styles'

const ParkFindHeader = ({
  searchTerm,
  onChangeText,
  onSearch,
  showFilter,
  filterApplied,
  count = 0,
}) => (
  <Header>
    <Search
      inputStyle={{ fontFamily: 'bcsans' }}
      value={searchTerm}
      onChangeText={onChangeText}
      onIconPress={onSearch}
      onSubmitEditing={onSearch}
    />
    <Content>
      <ParkCount>{`${count} matching park${count === 1 ? '' : 's'}`}</ParkCount>
      <FilterText>Filter</FilterText>
      <FilterButton
        icon="tune"
        size={18}
        onPress={showFilter}
        accessibilityLabel={'Filter Parks'}
      />
      {filterApplied && <FilterIndicator />}
    </Content>
  </Header>
)

ParkFindHeader.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  showFilter: PropTypes.func.isRequired,
  filterApplied: PropTypes.bool,
  count: PropTypes.number,
}

export default ParkFindHeader
