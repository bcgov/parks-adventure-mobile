import React from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Search,
  Content,
  ParkCount,
  FilterButton,
  Text,
  Icon,
  Indicator,
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
      <FilterButton onPress={showFilter}>
        <Text>Filter</Text>
        <Icon
          icon="tune"
          size={18}
          accessibilityLabel={'Filter Parks'}
          allowFontScaling={true}
        />
        {filterApplied && <Indicator />}
      </FilterButton>
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
