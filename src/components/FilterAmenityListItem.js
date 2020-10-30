import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'react-native-paper'
import { getParkSvg } from '../images/svgs'
import { Container, Title, Selection } from './FilterAmenityListItem.styles'

const FilterAmenityListItem = ({ name, onSelect, selected }) => (
  <Container>
    {getParkSvg(name, selected)}
    <Title selected={selected}>{name}</Title>
    <Selection selected={selected} accessibilityLabel={'select'}>
      <IconButton icon="check" color="white" size={26} onPress={onSelect} />
    </Selection>
  </Container>
)

FilterAmenityListItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
}

export default FilterAmenityListItem
