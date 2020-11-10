import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import { Divider, Button, useTheme } from 'react-native-paper'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DistanceMarkerSvg from '../../assets/DistanceMarker.svg'
import { DataContext } from '../utils/DataContext'
import FilterAmenityAccordion from '../components/FilterAmenityAccordion'
import {
  FilterContainer,
  Header,
  FilterScrollView,
  Section,
  FilterTitle,
  DistanceMarker,
  DistanceText,
  Footer,
  SelectionCountContainer,
  SelectionCountButton,
} from './Filter.styles'

function Filter({ navigation }) {
  const theme = useTheme()
  /*
   * A way of handling the font-scaling of the Large Accessibility Sizes
   * feature with a relative position footer
   */
  const [footerHeight, setFooterHeight] = React.useState(70)
  const {
    distance,
    setDistance,
    activities,
    updateActivities,
    facilities,
    updateFacilities,
    resetFilters,
    filteredList,
  } = React.useContext(DataContext)

  const [
    expandedActivitiesAccordion,
    setActivitiesAccordionExpanded,
  ] = React.useState(false)
  const [
    expandedFacilitiesAccordion,
    setFacilitiesAccordionExpanded,
  ] = React.useState(false)

  function close() {
    navigation.navigate('Find')
  }

  return (
    <FilterContainer>
      <Header>
        <MCIcon onPress={close} name="window-close" size={25} />
      </Header>

      <FilterScrollView
        showsVerticalScrollIndicator={false}
        footerHeight={footerHeight}>
        <Section>
          <FilterTitle>Distance</FilterTitle>
          <MultiSlider
            min={1}
            max={100}
            values={[distance]}
            onValuesChange={(values) => setDistance(values[0])}
            sliderLength={Dimensions.get('window').width - 55}
            containerStyle={{
              alignSelf: 'center',
              overflow: 'visible',
            }}
            trackStyle={{ marginTop: 24 }}
            selectedStyle={{
              backgroundColor: theme.colors.secondary900,
            }}
            unselectedStyle={{
              backgroundColor: theme.colors.secondary300,
            }}
            customMarker={(event) => (
              <DistanceMarker>
                <DistanceMarkerSvg />
                <DistanceText>{event.currentValue}km</DistanceText>
              </DistanceMarker>
            )}
            markerSize={60}
          />
        </Section>

        <Divider />

        <Section>
          <FilterTitle>Activities</FilterTitle>
          {activities.length > 3 && (
            <FilterAmenityAccordion
              amenities={activities}
              onSelect={(id) => updateActivities(id)}
              expanded={expandedActivitiesAccordion}
              onPress={() =>
                setActivitiesAccordionExpanded(!expandedActivitiesAccordion)
              }
              amenityType={'activities'}
            />
          )}
        </Section>

        <Divider />

        <Section>
          <FilterTitle>Facilities</FilterTitle>
          {facilities.length > 3 && (
            <FilterAmenityAccordion
              amenities={facilities}
              onSelect={(id) => updateFacilities(id)}
              expanded={expandedFacilitiesAccordion}
              onPress={() =>
                setFacilitiesAccordionExpanded(!expandedFacilitiesAccordion)
              }
              amenityType={'facilities'}
            />
          )}
        </Section>
      </FilterScrollView>

      <Footer
        onLayout={({ nativeEvent }) =>
          setFooterHeight(nativeEvent.layout.height)
        }>
        <Button compact={true} onPress={resetFilters}>
          Clear All
        </Button>
        <SelectionCountContainer>
          <SelectionCountButton
            onPress={close}
            mode={'contained'}
            color={theme.colors.primary50}
            contentStyle={{
              minHeight: 40,
            }}
            labelStyle={{
              fontFamily: 'bcsans-bold',
              color: theme.colors.primary,
            }}>
            {`Show ${filteredList.length} parks`}
          </SelectionCountButton>
        </SelectionCountContainer>
      </Footer>
    </FilterContainer>
  )
}

Filter.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Filter
