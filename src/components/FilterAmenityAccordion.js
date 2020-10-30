import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'react-native-paper'
import FilterAmenityListItem from '../components/FilterAmenityListItem'

const FilterAmenityAccordion = ({
  amenities,
  onSelect,
  expanded,
  onPress,
  amenityType = 'amenities',
}) => (
  <>
    <FilterAmenityListItem
      key={amenities[0].id}
      name={amenities[0].name}
      selected={amenities[0].selected}
      onSelect={() => onSelect(amenities[0].id)}
    />
    <FilterAmenityListItem
      key={amenities[1].id}
      name={amenities[1].name}
      selected={amenities[1].selected}
      onSelect={() => onSelect(amenities[1].id)}
    />
    <FilterAmenityListItem
      key={amenities[2].id}
      name={amenities[2].name}
      selected={amenities[2].selected}
      onSelect={() => onSelect(amenities[2].id)}
    />
    <List.Accordion
      title={`${!expanded ? 'See' : 'Collapse'} all ${amenityType}`}
      titleStyle={{ textDecorationLine: 'underline' }}
      expanded={expanded}
      onPress={onPress}>
      {amenities &&
        amenities
          .slice(3, amenities.length)
          .map((amenity) => (
            <FilterAmenityListItem
              key={amenity.id}
              name={amenity.name}
              selected={amenity.selected}
              onSelect={() => onSelect(amenity.id)}
            />
          ))}
    </List.Accordion>
  </>
)

FilterAmenityAccordion.propTypes = {
  amenities: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  amenityType: PropTypes.string,
}

export default FilterAmenityAccordion
