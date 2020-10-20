import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import {
  Header,
  Search,
  Content,
  ParkCount,
  FilterText,
  FilterButton,
} from './ParkFindHeader.styles'

const ParkFindHeader = ({ searchTerm, onChangeText, onSearch, count = 0 }) => {
  const navigation = useNavigation()

  const parkCountText = `${count} park${count === 1 ? '' : 's'} showing`

  return (
    <Header>
      <Search
        inputStyle={{ fontFamily: 'bcsans' }}
        value={searchTerm}
        onChangeText={onChangeText}
        onIconPress={onSearch}
      />
      <Content>
        <ParkCount>{parkCountText}</ParkCount>
        <FilterText>Filter</FilterText>
        <FilterButton
          icon="tune"
          size={18}
          onPress={navigation.toggleDrawer}
          accessibilityLabel={'Filter Parks'}
        />
      </Content>
    </Header>
  )
}

ParkFindHeader.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  count: PropTypes.number,
}

export default ParkFindHeader
